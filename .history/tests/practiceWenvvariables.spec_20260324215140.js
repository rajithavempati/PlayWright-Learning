
import { test, expect } from '@playwright/test';

test('loginSauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill(process.env.APP_USERNAME);
  await page.locator('[data-test="password"]').fill(process);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
});