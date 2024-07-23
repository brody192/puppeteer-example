import puppeteer from 'puppeteer-core';
import express from 'express';
import path from 'path';

var screenshotsDir = './screenshots';

const app = express();

const filename = 'screenshot.png';

app.use(express.static(screenshotsDir, { index: filename }));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port: ${port}`));

const browser = await puppeteer.connect({ browserWSEndpoint: process.env.BROWSER_WS_ENDPOINT });

const page = await browser.newPage();
await page.goto("https://example.com/");
await page.screenshot({ path: path.join(screenshotsDir, filename) });

browser.close();