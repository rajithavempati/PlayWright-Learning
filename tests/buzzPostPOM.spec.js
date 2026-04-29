import {test, expect} from "@playwright/test"
import { loginPage } from "../pages/loginpage.po"
import { dashBoardPage } from "../pages/dashboardpage.po"
import { newBuzzPostPage } from "../pages/addBuzzPost.po"
import data from "../testdata/login.json"
import buzzData from "../testdata/addBuzzPost.json"

let login
let dashBoard
let newBuzzPost

test.beforeEach(async ({page}) =>{

    login = new loginPage(page)
    dashBoard = new dashBoardPage(page)
    newBuzzPost = new newBuzzPostPage(page)

    await login.launchApp()
    await login.isLogoDisplayed()
    await login.loginCred(process.env.APP_USERNAME, process.env.APP_PASSWORD)
    await dashBoard.openBuzzModule()

})

test("Verify Added new Buzz Post ", async () =>{
    await newBuzzPost.enterTextAndPost(buzzData.newPost)
    await newBuzzPost.newBuzzPostSuccessMsg()
    await newBuzzPost.uploadPhoto()
   await newBuzzPost.newBuzzPostSuccessMsg()
})