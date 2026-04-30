import { test, expect } from "@playwright/test"

test("verify orangeHRM login credentials", async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.locator("input[name='username']").fill('Admin');
    await page.locator("input[name='password']").fill('admin123');
    await page.locator("button[type='submit']").click();
    await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
    await page.locator('(//a[@class="oxd-topbar-body-nav-tab-item"])[2]').click()
    await page.locator('//input[@type="file"]').setInputFiles('testdata/Ninja image.PNG')
 })