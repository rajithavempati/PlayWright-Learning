import { test, expect } from '@playwright/test';


test('RahulShetty Automation Practice page', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator('//input[@type="checkbox"]').first().click()
    //verify it is checked
    await expect(page.locator('//input[@type="checkbox"]').first()).toBeChecked()

    //verify select 2nd checkbox
    await page.locator('//input[@type="checkbox"]').nth(1).click()
    //verify 2nd checkbox is checked
    await expect(page.locator('//input[@type="checkbox"]').nth(1)).toBeChecked()
})

test('amazon select menu option', async ({ page }) => {
    await page.goto("https://www.amazon.ca/")
    //await page.locator('//a[@href="/Best-Sellers-generic/zgbs/?ref_=nav_cs_bestsellers"]').click();
    await page.locator('//a[@href="/Best-Sellers-generic/zgbs/?ref_=nav_cs_bestsellers"]/../..//following-sibling::li/div/a[text()="Electronics"]').click()

})

test('demoqa test application', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box')
    //css locators
    
    await page.locator('#userName').fill("Rajitha");
    await page.locator('//input[@class="mr-sm-2 form-control"]').fill("abc@gmail.com");
    //await page.locator('//textarea[@id="currentAddress"]').fill('123 Main Street');
    await page.locator('#currentAddress').fill('123 Main Street');
    await page.locator("//button[@class='btn btn-primary']").click()
})



