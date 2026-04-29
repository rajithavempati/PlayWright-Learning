const { test, expect } = require('@playwright/test');

test('Verify User can post on Buzz newsfeed', async ({ page }) => {
  // Generate random post text
  const randomText = `Automation Test Post - ${Date.now()}`;

  // Step 1: Navigate to OrangeHRM login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Step 2: Login as Admin
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 3: Verify dashboard loads after login
  await expect(page).toHaveURL(/dashboard/);

  // Step 4: Click on Buzz module from sidebar
  await page.getByRole('link', { name: 'Buzz' }).click();
  await expect(page).toHaveURL(/buzz\/viewBuzz/);

  // Step 5: Enter random text on "What's on your mind?" field and post it
  await page.getByRole('textbox', { name: "What's on your mind?" }).fill(randomText);
  await page.getByRole('button', { name: 'Post', exact: true }).click();

  // Step 6: Verify the posted text appears at the top of the newsfeed
  await expect(page.getByText(randomText).first()).toBeVisible();
});


