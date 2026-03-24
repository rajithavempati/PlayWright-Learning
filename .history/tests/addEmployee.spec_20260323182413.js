import { test, expect } from '@playwright/test';

test('Add Employee on Orange HRM', async ({ page }) => {

 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
 page.locator('[name="username"]').fill('Admin');
 page.locator('[name="password"]').fill('admin123');
 page.locator('[type="submit"]').click();
 await expect(page.locator('h6')).toHaveText('Dashboard');
 await page.locator('a').filter({ hasText: 'PIM' }).click();
 await page.locator('a').filter({ hasText: 'Add Employee' }).click();
 await page.locator('[name="firstName"]').fill('John');
 await page.locator('[name="lastName"]').fill('Doe');
 await page.locator('[type="submit"]').click();
 await expect(page.locator('h6')).toHaveText('Personal Details');  

})
