browser.ignoreSynchronization = true;
let HeaderPage = require("./header.page");
let WebButton = require('../controls/web.button');

let addProdLinkLocator = "div.form-group > a.section-body__actions >span:nth-child(2)";


class ProductsPage {
    constructor(){
        browser.waitForAngularEnabled(false);
        this.header = new HeaderPage();
    }

    getAddProdLink(){
        return new WebButton(element(by.css(addProdLinkLocator)),"Add product link");
    }

    async create(){

    await browser.sleep(3000);
    await this.header.getAdministrationMenu().click();   
    
    await browser.sleep(3000);
    await this.getAddProdLink().click();
    
    }


}

module.exports =  ProductsPage;