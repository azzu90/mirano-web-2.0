/*
 * Build-Time-Parser für die Design-Tokens – Quelle: src/styles/tokens.css.
 *
 * Zweck: /design-system zeigt jeden Wert (Hex, px, ms, Bezier …) LIVE aus der
 * Quelldatei, nie von Hand abgetippt – sonst driftet die Seite von der Realität
 * weg (Präzedenzfall: --mirano-muted wurde in tokens.css AA-korrigiert, das
 * DESIGN.md-Frontmatter hing hinterher). Visuals nutzen var(--token), der
 * angezeigte Text kommt aus diesem Parser – beide hängen an derselben Datei.
 *
 * process.cwd() statt import.meta.url: Vite bündelt Frontmatter beim Build in
 * dist/.prerender/chunks/, wodurch ein relativer Pfad zur Quelldatei ins Leere
 * liefe (gleiches Muster wie ProductsView.astro / PartnersCta.astro).
 *
 * Dev-Hinweis: Änderungen an tokens.css aktualisieren var()-Visuals sofort per
 * HMR, die geparsten Text-Werte aber erst nach einem Seiten-Reload.
 *
 * Fehlerverhalten: fehlende Datei/fehlender Token → console.warn im Build-Log
 * und leeres Ergebnis bzw. übersprungene Kachel. Der Build bricht NIE.
 */
import fs from 'node:fs';
import path from 'node:path';

export interface Token {
  name: string;
  value: string;
  /** Roher (deutscher) Rollen-Kommentar aus der Quelldatei, falls vorhanden. */
  comment?: string;
}

export interface TokenMeta {
  version?: string;
  date?: string;
  count: number;
}

export interface ParsedTokens {
  meta: TokenMeta;
  tokens: Token[];
  byName: Record<string, Token>;
}

/* Eine Custom Property pro Zeile: Name, Wert (überspannt Kommas/Klammern in
   clamp()/cubic-bezier()/linear-gradient()), optionaler Kommentar NACH dem ';'
   auf derselben Zeile. Standalone-Kommentarzeilen matchen nicht. */
const PROP_RE = /^[ \t]*(--[\w-]+)\s*:\s*([^;]+);[ \t]*(?:\/\*\s*([\s\S]*?)\s*\*\/)?/gm;

function readSource(relPath: string): string | null {
  try {
    return fs.readFileSync(path.join(process.cwd(), relPath), 'utf-8');
  } catch {
    console.warn(`[design-tokens] Quelldatei nicht lesbar: ${relPath}`);
    return null;
  }
}

function extractProps(source: string): Token[] {
  return Array.from(source.matchAll(PROP_RE), (m) => ({
    name: m[1],
    value: m[2].trim().replace(/\s+/g, ' '),
    ...(m[3] ? { comment: m[3].trim() } : {}),
  }));
}

/** Alle Custom Properties aus dem :root-Block von tokens.css + Header-Meta. */
export function parseTokensCss(): ParsedTokens {
  const source = readSource('src/styles/tokens.css');
  if (!source) return { meta: { count: 0 }, tokens: [], byName: {} };

  const rootMatch = source.match(/:root\s*\{([\s\S]*?)\n\}/);
  if (!rootMatch) {
    console.warn('[design-tokens] Kein :root-Block in tokens.css gefunden.');
    return { meta: { count: 0 }, tokens: [], byName: {} };
  }

  const tokens = extractProps(rootMatch[1]);
  const headerMatch = source.match(/Design Tokens\s+(v[\d.]+)\s*\((\d{2}\.\d{2}\.\d{4})\)/);

  return {
    meta: {
      ...(headerMatch ? { version: headerMatch[1], date: headerMatch[2] } : {}),
      count: tokens.length,
    },
    tokens,
    byName: Object.fromEntries(tokens.map((t) => [t.name, t])),
  };
}

/** Die dokumentierte PLIMA-Ausnahme, live aus ihrer Quelle (ProductsView.astro). */
export function parsePlimaProps(): Token[] {
  const source = readSource('src/views/ProductsView.astro');
  if (!source) return [];
  const props = extractProps(source).filter((t) => t.name.startsWith('--plima-'));
  if (props.length === 0) {
    console.warn('[design-tokens] Keine --plima-* Properties in ProductsView.astro gefunden.');
  }
  return props;
}

/** Tokens in gegebener Reihenfolge; fehlende werden übersprungen (mit Warnung). */
export function pick(parsed: ParsedTokens, names: string[]): Token[] {
  return names.flatMap((name) => {
    const token = parsed.byName[name];
    if (!token) {
      console.warn(`[design-tokens] Token fehlt in tokens.css und wird übersprungen: ${name}`);
      return [];
    }
    return [token];
  });
}

/* ----- Wert-Helfer: geben bei Nicht-Match null zurück, werfen nie ----- */

export function parseClamp(value: string): { min: string; preferred: string; max: string } | null {
  const m = value.match(/^clamp\(\s*([^,]+?)\s*,\s*([^,]+?)\s*,\s*([^)]+?)\s*\)$/);
  return m ? { min: m[1], preferred: m[2], max: m[3] } : null;
}

export function parseBezier(value: string): [number, number, number, number] | null {
  const m = value.match(/cubic-bezier\(\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*\)/);
  return m ? [Number(m[1]), Number(m[2]), Number(m[3]), Number(m[4])] : null;
}

export function parseMs(value: string): number | null {
  const m = value.match(/^(\d+(?:\.\d+)?)\s*ms$/);
  return m ? Number(m[1]) : null;
}

export function parseGradient(value: string): { angle: string; stops: string[] } | null {
  const m = value.match(/linear-gradient\(\s*([\d.]+deg)\s*,/);
  const stops = value.match(/#[0-9a-fA-F]{3,8}/g);
  return m && stops ? { angle: m[1], stops } : null;
}

/** '2.4rem' → 38.4 (Basis 16px); null bei allem anderen. */
export function remToPx(value: string): number | null {
  const m = value.match(/^([\d.]+)\s*rem$/);
  return m ? Math.round(Number(m[1]) * 16 * 10) / 10 : null;
}
