// One-off generator for the social share image (public/images/og.png).
// Run with: node scripts/generate-og.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { chromium } from 'playwright-core';

const rootDir = path.dirname(fileURLToPath(import.meta.url)) + '/..';

const logoSvg = readFileSync(path.join(rootDir, 'public/logo/mirano.svg'), 'utf-8');
const fontBold = readFileSync(
  path.join(rootDir, 'node_modules/@fontsource/league-spartan/files/league-spartan-latin-800-normal.woff2')
).toString('base64');

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  @font-face {
    font-family: 'League Spartan';
    font-weight: 800;
    font-style: normal;
    src: url(data:font/woff2;base64,${fontBold}) format('woff2');
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: 1200px;
    height: 630px;
    background: #FDFCFA;
    overflow: hidden;
  }
  .canvas {
    position: relative;
    width: 1200px;
    height: 630px;
  }
  .content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 110px;
    padding-right: 110px;
  }
  .logo {
    width: 460px;
    height: auto;
    margin-bottom: 56px;
  }
  .tagline {
    font-family: 'League Spartan', sans-serif;
    font-weight: 800;
    font-size: 56px;
    line-height: 1.2;
    color: #22282C;
    max-width: 900px;
  }
  .accent {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 6px;
    background: linear-gradient(90deg, #FF4A38 0%, #FF7B4D 100%);
  }
</style>
</head>
<body>
  <div class="canvas">
    <div class="content">
      ${logoSvg.replace('<svg ', '<svg class="logo" ')}
      <p class="tagline">Empower your business. Instantly.</p>
    </div>
    <div class="accent"></div>
  </div>
</body>
</html>`;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
const outPath = path.join(rootDir, 'public/images/og.png');
await page.screenshot({ path: outPath });
await browser.close();

console.log('OG image written to', outPath);
