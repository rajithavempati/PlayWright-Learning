import { test, expect } from '@playwright/test';
//import {faker} from '@faker-js/faker';

/**
 * const addemployees={
 * emp1:{firstname:"aneesha",lastname:"P",employeeId:faker.string.alphanumeric(5)},
 * emp2:{firstname:"ananth",lastname:"Q",employeeId:faker.string.alphanumeric(5)},
 * emp3:{firstname:"anmol",lastname:"R",employeeId:faker.string.alphanumeric(5)}
 *  * }
 * for(let i in addempoyees){
 * test('verify user can add employee' + i, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("input[name='username']").fill('Admin')
    await page.locator("input[name='password']").fill('admin123')
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click()
    await page.locator("//a[normalize-space()='Add Employee']").click()
    await page.locator("//input[@class='oxd-input oxd-input--active orangehrm-firstname']").fill(addemployees[i].firstname)
    await page.locator("//input[@class='oxd-input oxd-input--active orangehrm-firstname']").fill(addemployees[i].lastname)
    await page.locator("//input[@class='oxd-input oxd-input--active orangehrm-lastname']").fill(addemployees[i].firstname)
    await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill(addemployees[i].employeeId)
    await page.locator("button[type='submit']").click()
 
 * }
 */

const firstName = {
    firstName1: "selenium",
    firstName2: "cypress",
    firstName3: "playwright",
    firstName4: "nightwatch"
}
const lastName = {
    LastName1: "chromium",
    LastName2: "firfox",
    LastName3: "edge",
    LastName4: "safari"
}
const EmployeeId = {
    Eid1: 210,
    Eid2: 211,
    Eid3: 222,
    Eid4: 225
}

const firstNames = Object.values(firstName);
const lastNames = Object.values(lastName);
const employeeIds = Object.values(EmployeeId);

test.beforeEach('Launch app and navigate to PIM before each test', async ({ page }) => {
    // Launch app and navigate to PIM before each test.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("input[name='username']").fill('Admin')
    await page.locator("input[name='password']").fill('admin123')
    await page.locator("button[type='submit']").click()
    await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click()
})

for (let i = 0; i < firstNames.length; i++) {
    test('add a new employee row - ' + firstNames[i], async ({ page }) => {

        //click on Add Employee
        await page.locator("//a[normalize-space()='Add Employee']").click()
        //enter value on first name field
        await page.locator("//input[@class='oxd-input oxd-input--active orangehrm-firstname']").fill(firstNames[i])
        await page.locator("//input[@class='oxd-input oxd-input--active orangehrm-lastname']").fill(lastNames[i])
        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(employeeIds[i].toString())
        await page.locator("button[type='submit']").click()
        //validate success message snackbar
        await page.locator("//p[@class='oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text']").isVisible()
    })
}
