import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';


test('Verify Module Personal Information', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("input[name='username']").fill('Admin');
    await page.locator("input[name='password']").fill('admin123');
    await page.locator("button[type='submit']").click();

    /**  await page.locator("//a[@href='/web/index.php/pim/viewPimModule']").click()
     await page.locator("//a[@href='/web/index.php/leave/viewLeaveModule']").click()
     await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']").first().click()
     **/

    //await page.locator(text="PIM").click() - failing with this css locator

    //await page.locator("//span[text()='PIM']").click()
    await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()
    await page.getByText('PIM').click()

})

/**test('indexing css locator on orangehrm', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //await TIMEOUT(2500)
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[0]").fill('Admin');
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[1]").fill('admin123');
    await page.locator("button[type='submit']").click();
    await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()
})
    **/