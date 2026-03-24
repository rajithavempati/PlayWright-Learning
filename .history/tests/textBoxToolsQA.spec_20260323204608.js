import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('enter values on edit fields on ToolsQA site', async ({ page }) => {

await page.goto('https://demoqa.com/text-box')
await page.locator("input[placeholder='Full Name']").fill("Alex Smith");
await page.locator("input[placeholder='name@example.com']").fill("abc@euro.com");
await page.locator('#currentAddress').fill("123 Main Street, Anytown, CANADA");
await page.locator('#permanentAddress').fill("456 Elm Street, Othertown, CANADA"); 
await page.locator('#submit').click()



})
