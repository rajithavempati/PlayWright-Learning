import { test, expect } from '@playwright/test';

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
    Eid4: 223
}

const firstNames = Object.values(firstName);
const lastNames = Object.values(lastName);
const employeeIds = Object.values(EmployeeId);

test.beforeEach(async ({ page }) => {
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
    })
}