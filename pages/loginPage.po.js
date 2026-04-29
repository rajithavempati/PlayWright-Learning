import{expect} from "@playwright/test"


export class loginPage{

    constructor(page){

        this.page = page
        this.logo = page.locator('//img[@alt="company-branding"]')
        this.usernameInput = page.locator("//input[@name='username']") //xpath
        this.passwordInput = page.locator("//input[@name='password']") //xpath
        this.loginBtn = page.locator("button[type='submit']") //css for locator
        this.loginErrorMsge = page.locator('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]')
         }

        async launchApp(){
            //await this.page.goto('/web/index.php/auth/login')
            await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        } 

        async isLogoDisplayed(){
            await expect(this.logo).toBeVisible()

        }
        async loginCred(username, password){
            await this.usernameInput.fill(username)
            await this.passwordInput.fill(password)
            await this.loginBtn.click()
        }
        async loginSucess(){
            await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        }

        async loginFailure(){
            await expect(this.loginErrorMsge).toBeVisible()
        }

}