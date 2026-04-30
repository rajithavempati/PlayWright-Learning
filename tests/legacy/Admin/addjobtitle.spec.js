
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';


test.skip('Verify User can Job title', async ({ page }) => {
    
    // Launch the Url
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Enter username 
    await page.locator("input[name='username']").fill('Admin')

    //Password enter 
    await page.locator("input[name='password']").fill('admin123')

    // click on login button
    await page.locator("button[type='submit']").click()

    // Whether its naviated to dashboard page or not 
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

    await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(faker.person.jobTitle())

    await page.waitForTimeout(4000)
    // Enter Job description 

    await page.locator("//textarea[@placeholder='Type description here']").fill("Automation testing")
    
    //upload file to job specification
    await page.locator("input[type='file']").setInputFiles('testdata/Ninja image.PNG');
        
    // Enter Notes 

    await page.locator("//textarea[@placeholder='Add note']").fill("this is automation scripts")
    
    // save button 

    await page.locator("//button[@type='submit']").click()

    //verify user navigated to job titles list 

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')

    //upload file to job specification
    

})

test('Verify upload multiple file', async ({ page }) => {
    
    // Launch the Url
    await page.goto('http://blueimp.github.io/jQuery-File-Upload/')
    await expect.soft(page.locator('//a[@href="https://github.com/blueimp/jQuery-File-Upload/raju"]')).toBeVisible()    //when soft assertion fails, still continue the execution
        await expect(page.locator("//span[text()='Delete selected']")).toBeVisible()
     await page.locator('input[type="file"]').setInputFiles(['testdata/Ninja image.PNG', 'testdata/sampleFile.xlsx'])   


})