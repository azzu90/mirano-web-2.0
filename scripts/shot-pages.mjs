import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const shots = [
  ['/services', 'services'],
  ['/services/ai-automation', 'service-ai'],
  ['/products', 'products'],
  ['/references', 'references'],
  ['/about', 'about'],
  ['/contact', 'contact'],
  ['/de/legal-notice', 'legal-de'],
];
for (const [path, name] of shots) {
  await page.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible')));
  await page.waitForTimeout(250);
  await page.screenshot({ path: `/tmp/pg-${name}.png`, fullPage: true });
}
await browser.close();
console.log('done');
