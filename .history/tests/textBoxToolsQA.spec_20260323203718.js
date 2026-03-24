import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('enter values on edit fields on ToolsQA site', async ({ page }) => {

await page.goto('https://demoqa.com/text-box')
await page.locator("input[placeholder='Full Name']").fill("Alex Smith");
await page.locator("input[placeholder='name@example.com']").fill("abc@euro.com");
await page.locator("input[placeholder='name@example.com']").fill("123 Main Street, Anytown, CANADA"); 




})
