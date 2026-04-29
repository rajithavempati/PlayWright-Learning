import { test, expect } from "@playwright/test"


test('drag and drop- example13', async ({ page }) => {
    // Go to the page
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    await page.locator('//select[@class="day"]').selectOption('28') //text
    await page.locator('//select[@class="middle month"]').selectOption('03') //value
    await page.locator('//select[@class="year"]').selectOption('1996')
    //await page.locator('select[name^="DOB_Year"]').selectOption({index : 5})  //index 

})