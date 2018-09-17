browser.ignoreSynchronization = true;
let HeaderPage = require("./header.page");
let WebButton = require('../controls/web.button');
let WebInput = require('../controls/web.Input');

let addProdLinkLocator = "div.form-group > a.section-body__actions >span:nth-child(2)";
let productNameFieldLocator = "product-name";
let searchFamilyInputLocator = 'div.dropdown ul :nth-child(1)';
let productDropdownNameLocator = "div.dropdown span";

class ProductsPage {
    constructor(){
        browser.waitForAngularEnabled(false);
        this.header = new HeaderPage();
    }

    getAddProdLink(){
        return new WebButton(element(by.css(addProdLinkLocator)),"Add product link");
    }

    getProductNameField(){
        return new WebInput(element(by.id(productNameFieldLocator)), "Product name field");
    }

    getProductDropdownNameBtn(){
        //return new WebButton(element(by.css(productDropdownNameLocator)),"Family Product Dropdown Button");
       return new WebButton(element(by.xpath('//*[@id="change-product-family-list"]/dropdown-gds/ss-multiselect-dropdown/div/ul/li[3]/a/span')),"Select Family Name");
    }
    
    getSearchFamily(){
        return new WebInput(element(by.css(searchFamilyInputLocator)),"Family Product Search Input");
    }

   

    async create(){
        
    await browser.sleep(3000);
    await this.header.getAdministrationMenu().click();   
    
    await browser.sleep(3000);
    await this.getAddProdLink().click();

    await browser.sleep(3000);
    await this.getProductNameField().sendKeys("Valera");
    
    await browser.sleep(10 * 1000);
    await this.getProductDropdownNameBtn().click();
    
    await browser.sleep(3000);
    
    await this.getSearchFamily().sendKeys("AQA");
    //await this.getSearchFamily().click();

    await browser.sleep(3000);
    }


}

module.exports =  ProductsPage;