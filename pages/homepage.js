class Homepage {
    constructor(page) {
       this.page= page
       this.menu = "//img[@alt='prabin dahal']"
       this.logoutoption="//button[normalize-space()='Log out']" 
    }
    async logoutfromApplication(){
        await this.page.click(this.menu)
        await this.page.click(this.logoutoption)


    }
}
    module.exports= Homepage;