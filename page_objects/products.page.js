browser.ignoreSynchronization = true;
let HeaderPage = require("./header.page");

let addProdLinkLocator = "div.form-group > a.section-body__actions >span:nth-child(2)";


class ProductsPage {
    constructor(){
        
        this.header = new HeaderPage();
    }

    getAddProdLink(){
        return element(by.css(addProdLinkLocator));
    }

    async create(){

       // browser.wait(protractor.ExpectedConditions.presenceOf(this.header.getAdministrationMenu()), 5000, 'Element taking too long to appear in the DOM');
      
       await this.header.getAdministrationMenu().click();
        await this.getAddProdLink().click();
        //await browser.sleep(3000);
    }


}

module.exports =  ProductsPage;