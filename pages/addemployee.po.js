import { test, expect } from "@playwright/test"

export class addEmployeePage {

    constructor(page) {

        this.page = page
        this.addEmpMenu = page.locator("//a[text()='Add Employee']")
        this.firstNameInput = page.locator('input[name="firstName"]')
        this.lastNameInput = page.locator('input[name="lastName"]')
        this.saveBtn = page.locator('//button[@type="submit"]') //  
        this.personalDetailsHeader = page.locator("//a[@class='orangehrm-tabs-item --active']")
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
