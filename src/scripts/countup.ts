// Count-up für [data-countup]-Zahlen, einmalig beim Scrollen in den Viewport.
// Side-Effect-Modul: läuft dank ES-Modul-Cache genau einmal pro Seite,
// egal wie viele Komponenten es importieren. Suffixe wie "100%" oder "24h"
// bleiben erhalten (data-countup trägt den vollen Original-String).
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const nums = document.querySelectorAll<HTMLElement>('[data-countup]');

if (!reduced && nums.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        const m = /^(\d+)(.*)$/.exec(el.dataset.countup || '');
        if (!m) continue;
        const target = parseInt(m[1], 10);
        const suffix = m[2];
        const start = performance.now();
        const dur = 900;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3)))) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    },
    { threshold: 0.4 }
  );
  nums.forEach((n) => io.observe(n));
}
