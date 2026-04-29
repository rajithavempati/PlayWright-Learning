import { test, expect } from "@playwright/test"

export class newBuzzPostPage{

    
    constructor(page) {

        this.page = page
        this.newPostInputField = page.locator('//textarea[@class="oxd-buzz-post-input"]')
        this.postBtn = page.locator('//button[@type="submit"]')  
        //this.personalDetailsHeader = page.locator("//a[@class='orangehrm-tabs-item --active']")
        this.successMsgBar = page.locator("//div[contains(@class,'oxd-toast--success')]")
        this.sharePhotos = page.locator('//span[@class="oxd-glass-button-icon oxd-glass-button-icon--cameraglass"]')
        this.addPhotos = page.locator("//div[contains(@class,'orangehrm-photo-upload-area')]")
        this.shareBtn = page.locator('(//button[@type="submit"])[2]')
   
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
        //const fileChooserPromise = this.page.waitForEvent('filechooser')
        await this.addPhotos.click()
        //const fileChooser = await fileChooserPromise
        //await fileChooser.setFiles('testdata/Ninja image.PNG')
        await this.addPhotos.setInputFiles('testdata/Ninja image.PNG')
        await this.shareBtn.click()
    }

    async newBuzzPostSuccessMsg() {
        await expect(this.successMsgBar).toBeVisible()
    }

}