import { test, expect } from "@playwright/test"
import {loginPage} from "../pages/loginPage.po.js"
import {dashBoardPage} from "../pages/dashBoardPage.po.js"
import {addEmployeePage} from "../pages/addemployee.po.js"
import data from "../testdata/login.json"
import newEmpData from "../testdata/addemployee.json"
import { log } from "node:console"
import { da, ne } from "@faker-js/faker"

let login
let dashBoard
let newEmp  

test.beforeEach(async ({ page }) => {
    login = new loginPage(page);
    dashBoard = new dashBoardPage(page)
    newEmp = new addEmployeePage(page)

    await login.launchApp();
    await login.isLogoDisplayed();
    await login.loginCred(data.username, data.password)
    await dashBoard.openPIMmodule()
    await newEmp.openAddEmpoyeePage()
})

test("verify new employee with mandatory details", async()=>{

await newEmp.enterMandatoryDetailesAndSave(newEmpData.firstname, newEmpData.lastname)
await newEmp.employeeAddedSuccessPage()

})



