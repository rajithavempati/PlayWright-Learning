import { test, expect } from '@playwright/test';
import data from "C:/Users/RajithaVempati/Documents/LearnPlaywright/testdata/textbox.json";

test('enter values on edit fields on ToolsQA site', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box')
    await page.locator('#userName').fill(data.username);
    await page.locator('#userEmail').fill(data.emailaddress);
    await page.locator('#currentAddress').fill(data.currentAddress);
    await page.locator('#permanentAddress').fill(data.permanentAddress);
    await page.locator('#submit').click()
})