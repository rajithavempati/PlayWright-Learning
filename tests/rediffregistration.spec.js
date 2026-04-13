import { test, expect } from '@playwright/test';
//const { test } = require('@playwright/test');

test('register on rediff account', async ({ page }) => {

	await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
    await page.locator('input[name^="name"]').fill('sathish');
    await page.locator('input[name^="confirm_passwd"]').fill("123password")

})
    
