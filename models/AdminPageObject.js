let EC = protractor.ExpectedConditions;
let AbstractPageObject = require("../models/AbstractPageObject");
let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.input");
let WebTextView = require("../controls/web.label");

browser.ignoreSynchronization = true;


class AdminPageObject extends AbstractPageObject{
    constructor() {
        super();
       
        this.adminButton = new WebButton(element(by.xpath('//*[contains(text(),"ADMINISTRATION")]')), "Administration Button");
        this.productName = new WebTextInput(element(by.id('product-name')), "Product name field");

        this.addFamilyNameDropdown = new WebButton(element(by.css('button.dropdown-toggle.form-control.multiselect-dropdown>span')),"Family Product Dropdown Button");
        this.searchByFamilyName = new WebTextInput(element(by.xpath('//*[@id="change-product-family-list"]/dropdown-gds/ss-multiselect-dropdown/div/ul/li[1]/div/input')),"Family Product Search Input");
        this.selectFamilyNameBtn = new WebButton(element(by.xpath('//*[@id="change-product-family-list"]/dropdown-gds/ss-multiselect-dropdown/div/ul/li[3]/a/span')),"Select Family Name");
        
        this.addProduct = new WebButton(element(by.css('a.section-body__actions>span')), "Add Product Button");
        this.saveBtn = new WebButton(element(by.id('saveProductAdd')), "Save Button");

        this.searchProdInput = new WebTextInput(element(by.css('body > app > main > administration > div.container > div > div > projects > div > div.section > div.section__left > div.col-xs-12.section-body > search-field > div > input')),"Product Search Input");

        
    
    }

    async administrationButton(){
        await this.adminButton.click();
    }

    async newProductButton(){
        await this.addProduct.click();
     }

    async setProductName(productName){
        await this.productName.sendKeys(productName);
    }



    async clickFamilyNameDropdown (){
       await this.addFamilyNameDropdown.click();
    }

    async searchForFamily (familyName){
        await this.searchByFamilyName.sendKeys(familyName);
        await this.selectFamilyNameBtn.click();
      
    }

    async saveButton(){
        await this.saveBtn.click();
    }

    async searchForProduct(input){
        await this.searchProdInput.sendKeys(input);
        
    }

    async checkExistance(product){

        let searchProd= element(by.css(`//a[contains(text(),"${product}")]`));
        console.log(searchProd);
        
        await browser.sleep("20000");
       
        expext(searchProd).toBe(product,"No such product..");

        await browser.sleep("20000");
    }
}

module.exports = new AdminPageObject();