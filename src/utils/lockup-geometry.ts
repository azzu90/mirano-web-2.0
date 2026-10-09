/*
 * Build-Time-Messung der Lockup-Geometrie für die Logo-Schutzzone auf /design-system.
 *
 * Regel (Nutzer-bestätigt): x = Höhe der M-Marke (= des Kreises), an jeder Seite gemessen
 * ab der ARTWORK-Kante – nicht ab der viewBox-Kante. Die viewBox hat einen asymmetrischen
 * transparenten Rand, deshalb wird die Artwork-Bounding-Box aus der Datei selbst gemessen
 * und nichts davon von Hand eingetragen.
 *
 * Methode: SVG offline rendern (sharp/librsvg, transparent, 16x), Alpha-Kanal scannen.
 * Der Alpha-Scan ist deterministischer als sharp.trim(), das sich an der Farbe des
 * Eckpixels orientiert. Kante = ≥ 50 % Deckung; Auflösung 1/16 viewBox-Einheit.
 *
 * Absicherung: Die Annahme "der Kreis ist das höchste Element" wird gemessen, nicht
 * vorausgesetzt – der Verlaufs-Pfad (Kreis mit Aussparung) wird isoliert gerendert und muss
 * Oberkante, Unterkante und Höhe der Artwork-Bounding-Box treffen. Sonst bricht der Build
 * mit einer Fehlermeldung ab (bewusst hart: eine falsche Schutzzonen-Demo darf nicht
 * unbemerkt ausgeliefert werden – z. B. wenn die Logo-Datei später getauscht wird).
 *
 * process.cwd() statt import.meta.url: Vite bündelt Frontmatter beim Build in
 * dist/.prerender/chunks/ (gleiches Muster wie design-tokens.ts / ProductsView.astro).
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

/** Raster-Auflösung der Messung: 1 viewBox-Einheit = 16 px. */
const SCALE = 16;
/** Kante = mindestens 50 % Deckung (Alpha ≥ 128). */
const EDGE_ALPHA = 128;
/** Toleranz der Kreis-Assertion in viewBox-Einheiten (≈ 4 Raster-Pixel). */
const ASSERT_TOLERANCE = 0.25;

export interface LockupGeometry {
  /** Gemessene Datei, relativ zum Projekt-Root. */
  file: string;
  /** viewBox-Maße (= Maße der img-Box bei width:auto). */
  viewBox: { w: number; h: number };
  /** Artwork-Bounding-Box in viewBox-Einheiten. */
  art: { x0: number; y0: number; x1: number; y1: number; w: number; h: number };
  /** Transparenter Rand zwischen viewBox-Kante und Artwork (asymmetrisch). */
  margin: { left: number; top: number; right: number; bottom: number };
  /** Höhe der M-Marke (Kreis) in viewBox-Einheiten, am isolierten Verlaufs-Pfad gemessen. */
  markH: number;
  /** Schutzzone x in viewBox-Einheiten (= markH). */
  x: number;
  /** x relativ zur viewBox-Höhe, also zur gerenderten img-Höhe: x = k × img-Höhe. */
  k: number;
  /** viewBox-Seitenverhältnis b/h: img-Breite = img-Höhe × aspect. */
  aspect: number;
  /** Rand-Anteile an der img-Box (0–1): links/rechts von der Breite, oben/unten von der Höhe. */
  inset: { left: number; top: number; right: number; bottom: number };
}

interface Box {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

/** Rendert das SVG transparent und liefert die Alpha-Bounding-Box in viewBox-Einheiten. */
async function alphaBox(svg: Buffer | string, vb: { w: number; h: number }): Promise<Box> {
  const { data, info } = await sharp(Buffer.from(svg), { density: 72 * SCALE })
    .ensureAlpha()
    .extractChannel('alpha')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Raster-Maßstab aus den tatsächlichen Maßen ableiten und gegen die viewBox prüfen
  // (die width/height-Attribute der Datei müssen der viewBox entsprechen).
  const sx = info.width / vb.w;
  const sy = info.height / vb.h;
  if (Math.abs(sx - SCALE) > 0.5 || Math.abs(sy - SCALE) > 0.5) {
    throw new Error(
      `[lockup-geometry] Raster-Maßstab ${sx.toFixed(2)}x/${sy.toFixed(2)}x statt ${SCALE}x – ` +
        `width/height-Attribute der Datei passen nicht zur viewBox (${vb.w}x${vb.h}).`
    );
  }

  const { width: w, height: h } = info;
  let minX = w, maxX = -1, minY = h, maxY = -1;
  for (let y = 0; y < h; y++) {
    const row = y * w;
    for (let x = 0; x < w; x++) {
      if (data[row + x] >= EDGE_ALPHA) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < 0) throw new Error('[lockup-geometry] Kein sichtbares Artwork gefunden (Alpha überall < 50 %).');

  return { x0: minX / sx, y0: minY / sy, x1: (maxX + 1) / sx, y1: (maxY + 1) / sy };
}

async function measure(relPath: string): Promise<LockupGeometry> {
  const svgText = fs.readFileSync(path.join(process.cwd(), relPath), 'utf-8');

  const rootTag = svgText.match(/<svg\b[^>]*>/)?.[0];
  const viewBox = rootTag?.match(/viewBox="([^"]+)"/)?.[1]?.trim().split(/[\s,]+/).map(Number);
  if (!rootTag || !viewBox || viewBox.length !== 4 || viewBox.some((n) => !Number.isFinite(n))) {
    throw new Error(`[lockup-geometry] ${relPath}: keine lesbare viewBox.`);
  }
  const vb = { w: viewBox[2], h: viewBox[3] };

  // 1) Artwork-Bounding-Box der ganzen Datei
  const art = await alphaBox(svgText, vb);
  const artW = art.x1 - art.x0;
  const artH = art.y1 - art.y0;

  // 2) Kreis isolieren: der Pfad mit Verlaufsfüllung (Kreis mit Aussparung für das m)
  const circlePath = svgText.match(/<path\b[^>]*\bfill="url\(#[^"]+\)"[^>]*\/>/)?.[0];
  const defs = svgText.match(/<defs>[\s\S]*?<\/defs>/)?.[0];
  if (!circlePath || !defs) {
    throw new Error(`[lockup-geometry] ${relPath}: Verlaufs-Pfad (Kreis) oder <defs> nicht gefunden.`);
  }
  const circle = await alphaBox(`${rootTag}${defs}${circlePath}</svg>`, vb);
  const markH = circle.y1 - circle.y0;

  // 3) Assertion: Der Kreis ist das höchste Element – er bestimmt Ober- UND Unterkante des Artworks.
  const dTop = Math.abs(circle.y0 - art.y0);
  const dBottom = Math.abs(circle.y1 - art.y1);
  const dHeight = Math.abs(markH - artH);
  if (dTop > ASSERT_TOLERANCE || dBottom > ASSERT_TOLERANCE || dHeight > ASSERT_TOLERANCE) {
    throw new Error(
      `[lockup-geometry] Annahme "Kreis ist das höchste Element" verletzt in ${relPath}: ` +
        `Kreis y ${circle.y0.toFixed(2)}–${circle.y1.toFixed(2)} (Höhe ${markH.toFixed(2)}) ` +
        `vs. Artwork y ${art.y0.toFixed(2)}–${art.y1.toFixed(2)} (Höhe ${artH.toFixed(2)}); ` +
        `Toleranz ${ASSERT_TOLERANCE}. Die Schutzzonen-Regel (x = Höhe der M-Marke) muss neu bewertet werden.`
    );
  }

  const margin = {
    left: art.x0,
    top: art.y0,
    right: vb.w - art.x1,
    bottom: vb.h - art.y1,
  };

  return {
    file: relPath,
    viewBox: vb,
    art: { ...art, w: artW, h: artH },
    margin,
    markH,
    x: markH,
    k: markH / vb.h,
    aspect: vb.w / vb.h,
    inset: {
      left: margin.left / vb.w,
      top: margin.top / vb.h,
      right: margin.right / vb.w,
      bottom: margin.bottom / vb.h,
    },
  };
}

const cache = new Map<string, Promise<LockupGeometry>>();

/** Misst ein Lockup-SVG einmal pro Build-Prozess (memoisiert) – /design-system rendert drei Locales. */
export function measureLockup(relPath = 'public/logo/mirano.svg'): Promise<LockupGeometry> {
  let hit = cache.get(relPath);
  if (!hit) {
    hit = measure(relPath);
    cache.set(relPath, hit);
  }
  return hit;
}
