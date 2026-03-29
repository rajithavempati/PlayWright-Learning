import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

import empdata from "../../testdata/addemployee.json"
import ExcelJS from 'exceljs';

test('Verify User can create Employee', async ({ page }) => {


    // Launch the Url
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Enter username 
    await page.locator("input[name='username']").fill(process.env.APP_USERNAME)

    //Password enter 
    await page.locator("input[name='password']").fill(process.env.APP_PASSWORD)

    // click on login button
    await page.locator("button[type='submit']").click()

    // Whether its naviated to dashboard page or not 
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    // PIM 
    await page.locator("(//a[@class='oxd-main-menu-item'])[2]").click()

    // Add Employee
    await page.locator("//a[normalize-space(text())='Add Employee']").click()

    //Enter first name and Last name 

    // await page.locator("input[name='firstName']").fill(empdata.firstname)
    // await page.locator("input[name='lastName']").fill(empdata.lastname)

    //faker Js  
    // await page.locator("input[name='firstName']").fill(faker.person.firstName())
    // await page.locator("input[name='lastName']").fill(faker.person.lastName())

    // Using JS 
    // const randomtext = (Math.random() + 1).toString(36).substring(7);  // it genearets random 5 chars 
    // await page.locator("input[name='firstName']").fill("Raju"+randomtext)
    // await page.locator("input[name='lastName']").fill("G"+randomtext)

    //Excel sheet 

    const randomtext = (Math.random() + 1).toString(36).substring(7);  // it genearets random 5 chars
    await page.locator("input[name='firstName']").fill(empdata.firstname)
    await page.locator("input[name='lastName']").fill(empdata.lastname)

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('testdata/addemp.xlsx');

    const worksheet = workbook.getWorksheet(1); // first sheet

    // Read values
    const firstName = worksheet.getRow(1).getCell(2).value;
    const lastName = worksheet.getRow(2).getCell(2).value;

    await page.locator("input[name='firstName']").fill(firstName.toString())
    await page.locator("input[name='lastName']").fill(lastName.toString())



    //Employee ID enter 

    //await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill("2345")
    await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill(faker.string.alphanumeric(5))

    // click on save button 
    await page.locator("//button[@type='submit']").click()

    // Wheter Personal detals is visible or not   // assertions with in 5 sec if not vissible 
    await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()

})
