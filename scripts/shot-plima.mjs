import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await page.goto('https://plima.cloud/', { waitUntil: 'networkidle', timeout: 45000 });
await page.waitForTimeout(1200);
await page.screenshot({ path: 'public/images/plima-landing.png' });
await browser.close();
console.log('done');
