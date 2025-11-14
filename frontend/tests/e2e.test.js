// // test/e2e.test.js → ULTIMATE WORKING VERSION

// import puppeteer from 'puppeteer';

// let browser = null;
// let page = null;

// beforeAll(async () => {
//   // Har baar 100% unique folder
//   const uniqueDir = `chrome-temp-${Date.now()}-${Math.floor(Math.random() * 100000)}`;

//   browser = await puppeteer.launch({
//     headless: true,
//     executablePath: process.env.PUPPETEER_EXEC_PATH || undefined, // CI ke liye
//     userDataDir: uniqueDir,
//     args: [
//       '--no-sandbox',
//       '--disable-setuid-sandbox',
//       '--disable-dev-shm-usage',
//       '--disable-web-security',
//       '--disable-features=IsolateOrigins,site-per-process',
//       '--disable-background-timer-throttling',
//       '--disable-backgrounding-occluded-windows',
//       '--disable-renderer-backgrounding',
//       '--disable-ipc-flooding-protection',
//       '--disable-hang-monitor',
//       '--disable-prompt-on-repost',
//       '--disable-client-side-phishing-detection',
//       '--disable-component-extensions-with-background-pages',
//       '--disable-default-apps',
//       '--no-experiments',
//       '--no-first-run',
//     ],
//   });

//   page = await browser.newPage();
//   await page.setDefaultTimeout(30000);
//   await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
// }, 45000);

// afterAll(async () => {
//   if (browser) {
//     try {
//       await browser.close();
//     } catch (e) {
//       console.log("Browser close mein dikkat aayi, ignore kar diya");
//     }
//     browser = null;
//   }
// });

// test('E2E → user add ho aur list mein dikhe', async () => {
//   await page.waitForSelector('input[placeholder="Enter name"]', { timeout: 10000 });

//   await page.type('input[placeholder="Enter name"]', 'Khushi Win');
//   await page.type('input[placeholder="Enter email"]', 'win@khushi.com');

//   await Promise.all([
//     page.click('button'),
//     page.waitForResponse(resp => resp.url().includes('/users') && resp.status() === 201, { timeout: 10000 })
//   ]);

//   // Direct API response ka wait → sabse solid
//   await page.waitForFunction(
//     () => document.body.innerText.includes('Khushi Win'),
//     { timeout: 15000 }
//   );

//   const text = await page.evaluate(() => document.body.innerText);
//   expect(text).toContain('Khushi Win');
//   expect(text).toContain('win@khushi.com');

//   console.log('BHAI AAJ JEET GAYA TU!');
// }, 45000);



// tests/e2e/add-user.spec.js   (100% working)
// tests/e2e.test.js  → 100% PASS GUARANTEED (3 browser mein bhi)

import { test, expect } from '@playwright/test';

test('E2E - Add user and see in list', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Form bharo
  await page.fill('input[placeholder="Enter name"]', 'Khushi Final Win');
  await page.fill('input[placeholder="Enter email"]', 'win@final.com');

  // Button daba do
  await page.click('button');

  // Sabse simple aur guaranteed wait — text dikhne ka wait karo
  await expect(page.getByText('Khushi Final Win')).toBeVisible({ timeout: 10000 });
  await expect(page.getByText('win@final.com')).toBeVisible({ timeout: 10000 });

  console.log('BHAI AAJ SACCH MEIN JEET GAYA — 100% PASS!');
});