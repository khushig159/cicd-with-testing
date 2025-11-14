import { test, expect } from '@playwright/test';

test('E2E - Add user and see in list - 100% PASS', async ({ page }) => {
  await page.goto('https://cicd-with-testing.vercel.app');

  // Form bharo
  await page.fill('input[placeholder="Enter name"]', 'KHUSHI WINNER');
  await page.fill('input[placeholder="Enter email"]', 'winner@khushi.com');

  // Button daba do
  await page.click('button');

  // Sabse powerful aur guaranteed wait
  await expect(page.locator('text=KHUSHI WINNER')).toBeVisible({ timeout: 15000 });
  await expect(page.locator('text=winner@khushi.com')).toBeVisible({ timeout: 15000 });

  // Extra safety - list item mein check kar
  await expect(page.locator('li').filter({ hasText: 'KHUSHI WINNER' })).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'winner@khushi.com' })).toBeVisible();

  console.log('BHAI AAJ 100000% PASS HO GAYA - KHTM KAHANI!');
});