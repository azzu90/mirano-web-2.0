/*
 * WCAG-2.1-Kontrastmathematik (relative Luminanz) – pure functions, keine Dependencies.
 * Genutzt von /design-system, um Kontrast-Badges zur Build-Zeit aus den in
 * tokens.css geparsten Hex-Werten zu berechnen (nie von Hand eingetragen).
 */

/** '#RGB' oder '#RRGGBB' → [r, g, b] mit 0–255; null bei allem anderen (z. B. Gradients). */
export function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (!m) return null;
  let h = m[1];
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

/** Relative Luminanz nach WCAG 2.1; null, wenn der Wert kein einfacher Hex-Ton ist. */
export function relativeLuminance(hex: string): number | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const [r, g, b] = rgb.map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Kontrastverhältnis zweier Hex-Farben (≥ 1); null, wenn eine Seite kein Hex ist. */
export function contrastRatio(a: string, b: string): number | null {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  if (la === null || lb === null) return null;
  const [hi, lo] = la >= lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

/** '4.6182' → '4.61:1' – abgerundet, damit nie über eine Schwelle „aufgerundet" wird. */
export function formatRatio(ratio: number): string {
  return `${Math.floor(ratio * 100) / 100}:1`;
}

/** WCAG-Stufe für normalen Text: 7 → AAA, 4.5 → AA, sonst null. */
export function wcagLevel(ratio: number): 'AAA' | 'AA' | null {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  return null;
}
