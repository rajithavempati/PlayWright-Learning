import { test, expect } from '@playwright/test';

test.only('click on gallery nav option', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/disappearing_elements')
    await page.reload({ timeout: 30000 });
    if (await page.locator("//a[@href='/gallery/']").isVisible()) { 
    await page.locator("//a[@href='/gallery/']").click(); }
    else {
        await page.locator("//a[@href='/portfolio/']").click()
    }

})


test('click on last nav option', async ({ page }) => {
 await page.goto('https://the-internet.herokuapp.com/disappearing_elements')
 const galleryVisible=await page.locator("//a[normalize-space(text())='Gallery']").isVisible();
 if(galleryVisible){
    await page.locator("//a[normalize-space(text())='Gallery']").click()

 }
 else{
    await page.locator("//a[normalize-space(text())='Portfolio']").click()
 }

})
