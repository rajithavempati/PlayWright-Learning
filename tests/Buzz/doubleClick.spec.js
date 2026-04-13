const { test, expect } = require('@playwright/test');

test('Verify double click on button shows success message', async ({ page }) => {
  await page.goto('https://qa-practice.razvanvancea.ro/');

  // Click on "Btn actions" in the left menu
  await page.getByRole('link', { name: 'Btn actions' }).click();

  // Click on "Double click btn" option
  await page.getByRole('link', { name: 'Double click btn' }).click();

  // Verify the page heading
  await expect(page.getByRole('heading', { name: 'Double Click on Button Example' })).toBeVisible();

  // Double click on "Double click me" button
  await page.getByRole('button', { name: 'Double click me' }).dblclick();

  // Verify success message
  await expect(page.getByRole('alert')).toHaveText('Congrats, you double clicked!');
});
