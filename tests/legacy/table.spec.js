import { test, expect } from '@playwright/test';



test('Verify user click on table column', async ({ page }) => {
   
await page.goto('https://the-internet.herokuapp.com/tables')
await page.locator("(//td[text()='John'])[2]/../td[6]/a[1]").click()

//await expect(page.locator('//table[@id="table2"]/thead/tr/th')).toHaveCount(6)
const coloums = await page.$$('//table[@id="table2"]/thead/tr/th')
console.log(coloums.length)
})


test('Verify table column asending order', async ({ page }) => {


})