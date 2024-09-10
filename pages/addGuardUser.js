class AddGuardUser {
    constructor(page) {
       this.page= page
       this.menu = "a[href='/society-staffs']"
       this.goption="body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2)" 
       this.addoption ="button[aria-label='Add new guard user'] h1"
       this.bloodGroup="//input[@id='mantine-irvbnajx9']"
       
    }
    async AddGuardUser(){
        await this.page.click(this.menu)
        await this.page.click(this.goption)
        await this.page.click(this.addoption)
        await this.page.fill('#username','Ranbir_max')
        await this.page.fill('#name','Ranbir')
        await this.page.fill('#contact','+9779856985200')
        await this.page.fill('#email','ranbir24@gmail.com')

        //Blood Group
        await this.page.click('input[class*="mantine-Input-input"]');
        await this.page.waitForSelector('div[role="listbox"]');  // Adjust based on your dropdown options container
        await this.page.click('div[role="option"]:has-text("A+")'); // Finds and clicks the option with the text "A+"
        //Gender
         await this.page.evaluate(() => {
            // Locate the dropdown element and open it if not already open
            const input = document.querySelector('input[placeholder="Please select gender"]');
            if (input) {
              // Open the dropdown if needed
              input.click();
              
              // Find the option with the text "Male" and click it
              const options = document.querySelectorAll('[role="option"]');
              options.forEach(option => {
                if (option.textContent.includes('Male')) {
                  option.click();
                }
              });
            }
          }); 
          
          //Surveillance Point
          await this.page.evaluate( () => {
            const input= document.querySelector('input[placeholder="Please select the surveillance point"]');
            if (input){
                const options= document.querySelectorAll('[role="option"]');
                    options.forEach(option=>{
                        if(option.textContent.includes('WEST GATE')){
                            option.click();
                        }
                    });
            }
          });
          // Shift point
          await this.page.evaluate(()=>{
            const input =document.querySelector('input[placeholder="Please select the shift"]');
                if (input){
                    const options= document.querySelectorAll('[role="option"]');
                    options.forEach(option =>{
                        if (option.textContent.includes('Morning'))
                        {
                            option.click();
                        }

                     });

                }

          });


        //Select the date
        await this.page.fill('#dob','1998-09-10')
    //Upload images
       
        await this.page.setInputFiles('#image', './files/good.jpg');

        await this.page.pause()
      

    }
}
    module.exports= AddGuardUser;