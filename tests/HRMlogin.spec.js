import { test, expect } from "@playwright/test"
import { loginPage } from "../pages/loginPage.po.js"
import data from "../testdata/login.json"

// test.skip("verify orangeHRM login credentials", async ({ page }) => {
//     const login = new loginPage(page)
//     await login.launchApp()
//     await login.isLogoDisplayed()
//     //await login.loginCred("Admin", "admin123")
//     await login.loginCred(process.env.APP_USERNAME, process.env.APP_PASSWORD) // from env variable folder
//     await login.loginSucess()
// })
// test.skip("verify orangeHRM login, valid username and invalid password credentials - pom", async ({ page }) => {
//     const login = new loginPage(page)
//     await login.launchApp()
//     await login.isLogoDisplayed()
//     //await login.loginCred("Admin", "admin123")
//     await login.loginCred(process.env.APP_USERNAME,data.wrongpassword) // from testdata folder
//     await login.loginFailure()
// })
// test.skip("verify orangeHRM login, invalid username and valid password credentials - pom", async ({ page }) => {
//     const login = new loginPage(page)
//     await login.launchApp()
//     await login.isLogoDisplayed()
//     //await login.loginCred("Admin", "admin123")
//     await login.loginCred(data.wrongusername, data.password) // elements value from testdata folder
//     await login.loginFailure()
// })
// test("verify orangeHRM login, invalid username and invalid password credentials - pom", async ({ page }) => {
//     const login = new loginPage(page)
//     await login.launchApp()
//     await login.isLogoDisplayed()
//     //await login.loginCred("Admin", "admin123")
//     await login.loginCred(data.wrongusername, data.wrongpassword) // from testdata folder
//     await login.loginFailure()
// })

// using beforeEach menthod for above code

let login;
test.beforeEach(async ({ page }) => {
    login = new loginPage(page);
    await login.launchApp();
    await login.isLogoDisplayed();
});

test("verify orangeHRM login credentials", async () => {
    await login.loginCred(process.env.APP_USERNAME, process.env.APP_PASSWORD); // from env variable folder
    await login.loginSucess();
});

test("verify orangeHRM login, valid username and invalid password credentials", async () => {
    await login.loginCred(process.env.APP_USERNAME, data.wrongpassword); // from testdata folder
    await login.loginFailure();
});

test("verify orangeHRM login, invalid username and valid password credentials", async () => {
    await login.loginCred(data.wrongusername, data.password); // from testdata folder
    await login.loginFailure();
});

test("verify orangeHRM login, invalid username and invalid password credentials", async () => {
    await login.loginCred(data.wrongusername, data.wrongpassword); // from testdata folder
    await login.loginFailure();
});

