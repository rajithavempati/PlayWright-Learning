import { test, expect } from '@playwright/test';

const data = ["Hari", "abc@xyz.com", "Del", "Hyd"]

test('use array elements on edit fields on ToolsQA site', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box')
    await page.locator('#userName').fill(data[0]);
    await page.locator('#userEmail').fill(data[1]);
    await page.locator('#currentAddress').fill(data[2]);
    await page.locator('#permanentAddress').fill(data[3]);
    await page.locator('#submit').click()
    await page.close()
    
})

test.only('get all menu items', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@name="password"]').fill("admin123");
    await page.locator('//button[@type="submit"]').click()
    
    await page.waitForTimeout(3000)

    const menuitems = await page.locator("//a[@class='oxd-main-menu-item']").allTextContents()
    console.log(menuitems)

    //const sortedmenus = menuitems.sort()
    //expect(menuitems).toBe(sortedmenus)

})
