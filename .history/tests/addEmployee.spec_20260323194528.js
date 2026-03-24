import { test, expect } from '@playwright/test';

test('Add Employee on Orange HRM', async ({ page }) => {

    //navigate to the login page of Orange HRM
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
 
 //you need 'await' before every locator action
 await page.locator("input[name='username']").fill('Admin')
 await page.locator("input[name='password']").fill('admin123')
 await page.locator("button[type='submit']").click()
 
 //verify login success 
 await expect(page.locator('h6')).toHaveText('Dashboard')

 //add a new employee
 await page.locator('a').filter({ hasText: 'PIM' }).click();
 await page.locator('a').filter({ hasText: 'Add Employee' }).click();
 await page.locator('[name="firstName"]').fill('John');
 await page.locator('[name="lastName"]').fill('Doe');
 await page.locator("//button[@type='submit']").click()
 
 //verify employee added successfully

 //await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()
 //await expect(page.locator("h6.oxd-text.oxd-text--h6.--strong")).toContainText('John Doe')

})
