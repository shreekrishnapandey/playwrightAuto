class LoginPage
{

    constructor(page){
        this.page=page
        this.username="#email"
        this.password="//input[@id='password']"
        this.proceedbutton="//button[@aria-label='Proceed']"

    
    
    }
async LoginToWeb()
{
    await this.page.fill(this.username,"sunlight24@gmail.com")
    await this.page.fill(this.password,"Test@123")
    await this.page.click(this.proceedbutton)
   
}

}
module.exports= LoginPage;
