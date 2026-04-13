import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';

test('Verify Module Personal Information', async ({ page }) => {

await page.goto('https://the-internet.herokuapp.com/disappearing_elements')
// click on home nav - option
//await page.locator('a:has-text("Home")').click();
await page.reload();
await page.goto({TIMEOUT:6000});

//await expect(page.locator('a:has-text("Gallery")')).toBeVisible({timeout:5000})

})
