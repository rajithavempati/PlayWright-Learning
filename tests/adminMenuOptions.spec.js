import { test, expect } from '@playwright/test';
//const { test } = require('@playwright/test');

test('create scripts for Admin dropdown menu on Orange HRM', async ({ page }) => {

    //navigate to the login page of Orange HRM
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //you need 'await' before every locator action
    await page.locator("input[name='username']").fill('Admin')
    await page.locator("input[name='password']").fill('admin123')
    await page.locator("button[type='submit']").click()

    const uniqueSeed = Date.now();

    for (let i = 40; i <= 41; i++) {
    await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[1]").click()
    await page.locator("//li[@class='oxd-topbar-body-nav-tab --parent'][1]").click()
    
    //go to job menu and add a new job title and save
    //select jop title option
    await page.locator("//a[@class='oxd-topbar-body-nav-tab-link'][1][text()='Job Titles']").click()
    // click on add button
    await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']").click()
    //enter value on edit field
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(`automation ${uniqueSeed}-${i}`)
    // click on save button
    await page.locator("button[type=submit]").click()

    //go to job menu and add a new pay garde and save
    await page.locator("//span[normalize-space()='Job']").click()
    await page.locator("//a[normalize-space()='Pay Grades']").click()
    await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']").click()
    await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill(`name ${uniqueSeed}-${i}`)
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')

    //go to job menu and add a new employment status row and save
    await page.locator("//span[normalize-space()='Job']").click()
    await page.locator("//a[normalize-space()='Employment Status']").click()
    await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']").click()
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(`status ${uniqueSeed}-${i}`)
    await page.locator("//button[normalize-space()='Save'][1]").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus')

    //go to job menu and add a new work shifts row and save
    await page.locator("//span[normalize-space()='Job']").click()
    await page.locator("//a[normalize-space()='Work Shifts']").click()
    await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']").click()
    await page.locator("//div[@class='oxd-grid-2 orangehrm-full-width-grid']//div//input[@class='oxd-input oxd-input--active']").fill(`status ${uniqueSeed}-${i}`)
     await page.locator("//button[normalize-space()='Save'][1]").click()
    




}
})
