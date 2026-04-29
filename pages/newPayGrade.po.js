import { test, expect } from "@playwright/test"

export class addPayGradePage {

    constructor(page) {

        this.page = page
        this.jobsubMenu = page.locator('//li[contains(.,"Job"]')
        this.newPayGrade = page.locator('(//a[@class="oxd-topbar-body-nav-tab-link"])[2]')
        this.addBtn = page.locator('(//button[@type="button"])[4]')
        this.addName = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.saveBtn = page.locator('//button[@type="submit"]')
        this.addBtn = page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.currencyDDmenu = page.locator('//div[@class="oxd-select-text-input"]')
        this.currenyDDvalue = page.locator("//div[@role='listbox']//span[contains(text(),'ALL')]") //       
        this.MinSalaryInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[3]')
        this.MaxSalaryInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[4]')
        this.salarySaveBtn = page.locator('(//button[@type="submit"])[2]')
        
    }

    async openAddEmpoyeePage() {
        //await this.page.goto('/web/index.php/auth/login')
        await this.addEmpMenu.click()
    }

    async enterMandatoryDetailesAndSave(firstName, lastName) {
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.saveBtn.click()
    }

    async employeeAddedSuccessPage() {
        await expect(this.personalDetailsHeader).toBeVisible()
    }

}