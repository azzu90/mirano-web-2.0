import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
// EN Root komplett
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
await page.evaluate(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible')));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/home-en-full.png', fullPage: true });
// DE Hero
await page.goto('http://localhost:4321/de', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/home-de-hero.png' });
// HR Hero
await page.goto('http://localhost:4321/hr', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/home-hr-hero.png' });
await browser.close();
console.log('done');
