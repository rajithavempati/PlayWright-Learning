import { test, expect } from '@playwright/test';


test('enter values on edit fields on ToolsQA site', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box')
    await page.locator('#userName').fill("Alex Smith");
    await page.locator('#userEmail').fill("alex@Smith.com");
    await page.locator('#currentAddress').fill("123, main street\n, Toronto\n Canada");
    await page.locator('#permanentAddress').fill("India");
    await page.locator('#submit').click()
})