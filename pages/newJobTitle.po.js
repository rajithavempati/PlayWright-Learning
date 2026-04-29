import { test, expect } from "@playwright/test"

export class newJobTitlePage{

    constructor(page){

        this.page = page
        this.jobsubMenu = page.locator('//li[contains(.,"Job"]')
        this.jobTitle = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.jobDescription = page.locator('(//textarea[@class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"])[1]')
        this.saveBtn = page.locator('//button[@type="submit"]')
     }

     async cickOnJobSubMenu(){
        await this.jobsubMenu.click()

     }





    }