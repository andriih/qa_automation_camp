let EC = protractor.ExpectedConditions;
let AbstractPageObject = require("../models/AbstractPageObject");
let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.input");
let WebTextView = require("../controls/web.label");


class AdminPageObject extends AbstractPageObject{
    constructor() {
        super();
        this.adminButton = new WebButton(element(by.css('ul.nav.navbar-nav.navbar-right.gds-navigation>:nth-child(2)')), "Administration Button");
        //this.adminButton = new WebButton(element(by.xpath('//*[contains(text(),"ADMINISTRATION")]')), "Administration Button");
        
        //this.logDropdown = new WebButton(element(by.css('.user-data>:nth-child(1)')), "Administration Button");
        //this.logoutButton = new WebButton(element(by.css('.dropdown-item>:nth-child(1)')), "Logout Button");

        this.productName = new WebTextInput(element(by.id('product-name')), "Product name field");
        //this.productName = new WebTextInput(element(by.id('product-name')), "Product name field");

        this.addProduct = new WebButton(element(by.css('a.section-body__actions')), "Add Product Button");

        this.saveButton = new WebButton(element(by.id('saveProductAdd')), "Save Button");
    }

    async administrationButton(){
        //await this.adminButton.click();
        let link = element(by.xpath('//*[contains(text(),"ADMINISTRATION")]')).click();
        //let link = element(by.css('ul.nav.navbar-nav.navbar-right.gds-navigation>:nth-child(2)')).click();

        browser.wait(EC.elementToBeClickable(link), 10000);
        link.click();

    }

    async setProductName(productName){
        await this.productName.sendKeys(productName);
    }

    async newProductButton(){
        let addProduct = element(by.css('.section-body__actions>:nth-child(2)')).click();
       
        browser.wait(EC.elementToBeClickable(addProduct), 10000);
        addProduct.click();

        console.log("Add Product Button");

    }

    async saveButton(){
        
        let saveBtn = element(by.id('saveProductAdd')).click();
       
        browser.wait(EC.elementToBeClickable(saveBtn), 10000);
        saveBtn.click();

        console.log("saveBtn");
    }
}

module.exports = new AdminPageObject();