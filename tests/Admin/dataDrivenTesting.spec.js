import { test, expect } from '@playwright/test';
//import { faker } from '@faker-js/faker';

const jobtitles = {

    title1: "SDET 1",
    title2: "Automation test Engineer",
    title3: "Sr Automation test Engineer",
    title4: "QA Lead Automation"
}

for (let i in jobtitles) {

    test('Verify User can Job title - '+ i, async ({ page }) => {
        // Launch the Url
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.locator("input[name='username']").fill('Admin')        //Password enter 
        await page.locator("input[name='password']").fill('admin123')        // click on login button
        await page.locator("button[type='submit']").click() 
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        // click on Admin 
        await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[1]").click()
        //click on Job
        await page.locator("//span[normalize-space(text())='Job']").click()
        //click on job titles 
        await page.locator("//a[normalize-space(text())='Job Titles']").click()
        //click on Add 
        await page.locator("//button[contains(.,'Add')]").click()
        // enter job title 
        await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(jobtitles[i])
        await page.waitForTimeout(4000)
        // Enter Job description 
        await page.locator("//textarea[@placeholder='Type description here']").fill("Automation testing")

        // Enter Notes 

        await page.locator("//textarea[@placeholder='Add note']").fill("this is automation scripts")

        // save button 

        await page.locator("//button[@type='submit']").click()

        //verify user navigated to job titles list 

        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')

    })
}
