const {test, expect}= require('@playwright/test');
const LoginPage = require("../pages/loginpage")
const Homepage=require ("../pages/homepage")
const AddGuardUser= require("../pages/addGuardUser")
test('First Test Script', async ({page}) => {
    await page.goto('https://societypanel.aitc.ai/login');
    const loginPage =new LoginPage(page)
    await loginPage.LoginToWeb()
    const addGuardUser = new AddGuardUser(page)
    await addGuardUser.AddGuardUser()

   
});