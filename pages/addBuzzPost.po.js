import { test, expect } from "@playwright/test"

export class newBuzzPostPage{

    
    constructor(page) {

        this.page = page
        this.newPostInputField = page.locator('//textarea[@class="oxd-buzz-post-input"]')
        this.postBtn = page.locator('//button[@type="submit"]')  
        //this.personalDetailsHeader = page.locator("//a[@class='orangehrm-tabs-item --active']")
        this.successMsgBar = page.locator("//div[contains(@class,'oxd-toast--success')]")
        this.sharePhotos = page.locator('//span[@class="oxd-glass-button-icon oxd-glass-button-icon--cameraglass"]')
        this.addPhotos = page.locator('//input[@type="file"]')
        this.shareBtn = page.locator('//div[@class="oxd-form-actions orangehrm-buzz-post-modal-actions"]')
   
    }


     async gotoBuzzPage() {
        //await this.page.goto('/web/index.php/auth/login')
        await this.buzzMenu.click()
    }

    async enterTextAndPost(newPost) {
        await this.newPostInputField.fill(newPost)
        await this.postBtn.click()
    }

    async uploadPhoto (){
        await this.sharePhotos.click()
        await this.addPhotos.waitFor({ state: 'attached' })
        await this.addPhotos.setInputFiles('testdata/Ninja image.PNG')
        await this.shareBtn.click()
    }

    async newBuzzPostSuccessMsg() {
        await expect(this.successMsgBar).toBeVisible()
    }

}