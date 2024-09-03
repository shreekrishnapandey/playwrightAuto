const {test, expect}= require('@playwright/test');
const LoginPage = require("../pages/loginpage")
import {loginPage} from '../pages/loginpage';
const Homepage=require ("../pages/homepage")
test('First Test Script', async ({ page }) => {
    await page.goto('https://societypanel.aitc.ai/login');
    const loginPage =new LoginPage(page)
    await loginPage.LoginToWeb()

   const homepage = new Homepage(page)
    await homepage.logoutfromApplication()
    await page.pause();
   
});