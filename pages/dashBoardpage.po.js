import { test, expect } from "@playwright/test"

export class dashBoardPage{

    constructor(page){

        this.page = page
        this.PIMmenu = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
        this.adminMenu = page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]')
        this.buzzMenu = page.locator('//a[@href="/web/index.php/buzz/viewBuzz"]')
        this.claimMenu = page.locator('//a[@href="/web/index.php/claim/viewClaimModule"]')
    
    }

     async openPIMmodule(){
            //await this.page.goto('/web/index.php/auth/login')
            await this.PIMmenu.click()
        }

        async openAdminModule(){
            await this.adminMenu.click()
        }
         async openClaimModule(){
            await this.claimMenu.click()
        }

         async openBuzzModule(){
            await this.buzzMenu.click()
        }

     }
