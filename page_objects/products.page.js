browser.ignoreSynchronization = true;

let HeaderPage = require("./header.page");
let WebButton = require('../controls/web.button');
let WebInput = require('../controls/web.Input');
let WebDropdown = require('../controls/web.dropdown');

let EC = protractor.ExpectedConditions;

let addProdLinkLocator = "div.form-group > a.section-body__actions >span:nth-child(2)";
let productNameFieldLocator = "product-name";
let searchFamilyInputLocator = '#change-product-family-list > dropdown-gds > ss-multiselect-dropdown > div > ul > li.dropdown-item.search > div > input';
let productDropdownNameBtnLocator = 'button.dropdown-toggle.form-control';
let productFamilySearchResultLocator = '#change-product-family-list > dropdown-gds > ss-multiselect-dropdown > div > ul > li:nth-child(3) > a';

let productSaveBtnLocator = "#saveProductAdd";

let toasterPopupLocator = "#toast-container > div > div:nth-child(2) > span";
let toasterErrorLocator = "#toast-container > div > div:nth-child(3) > span";

let searchProductLocator = "div.section__left  input.form-control";
let selectedListItemLocator = "body > app > main > administration > div.container > div > div > projects > div > div.section > div.section__left > div.col-md-12.section-body.preview-list__wrapper.ps-container.ps-theme-default > ul > li > a";

let editBtnLocator = 'button.gds-edit-icon';
let saveBtnLocator = "#saveProductEdit";

let deleteBtnLocator = "button.gds-delete-icon";


class ProductsPage {
    constructor(){
        this.header = new HeaderPage();
    }

    getAddProdLink(){
        return new WebButton(element(by.css(addProdLinkLocator)),"Add product link");
    }

    getProductNameField(){
        return new WebInput(element(by.id(productNameFieldLocator)), "Product name field");
    }

    getProductDropdownNameBtn(){
       return new WebButton(element(by.css(productDropdownNameBtnLocator)),"Select Family Name");
    }
    
    getSearchFamily(){
        return new WebInput(element(by.css(searchFamilyInputLocator)),"Family Product Search Input");
    }

    getProductFamilySearchResult(){
        return new WebButton(element(by.css(productFamilySearchResultLocator)), "Search results");
    }

    getProductSaveBtn(){
        return new WebButton(element(by.css(productSaveBtnLocator)), "Save Button");
    }

    getToasterPop(){
        return element(by.css(toasterPopupLocator));
    }

    getProductTitleAfterCreation(){
        return element(by.css(productTitleAfterCreation));
    }
    
    getSearchProductInput(){
        return new WebInput(element(by.css(searchProductLocator)),"Product Search Input");
    }

    getSelectedListItem(){
        return new WebButton(element(by.css(selectedListItemLocator)), "Selected list item Button");
    }

    getEditBtn(){
        return new WebButton(element(by.css(editBtnLocator)), "Selected list item Button");
    }

    getSaveBtn(){
        return new WebButton(element(by.css(saveBtnLocator)), "Selected list item Button");
    }

    getDeleteBtn(){
        return new WebButton(element(by.css(deleteBtnLocator)), "Selected list item Button");
    }
    

    async create(randomName){

    await browser.waitForAngularEnabled(false);    
    
    await browser.wait(EC.visibilityOf($("#navbar > ul > li:nth-child(2) > a")),5000);
    await this.header.getAdministrationMenu().click("");   
    
    await browser.wait(EC.visibilityOf($("#navbar > ul > li:nth-child(1) > a")),10 * 1000);
    await this.getAddProdLink().click();

    
    await this.getProductNameField().sendKeys(randomName);
    
    await browser.wait(EC.visibilityOf($(productDropdownNameBtnLocator)),5 * 10000);
    await this.getProductDropdownNameBtn().click();
    
    
    
    await browser.wait(EC.visibilityOf($(searchFamilyInputLocator)),5 * 10000);
    await this.getSearchFamily().sendKeys("AQA");
    
    await browser.wait(EC.visibilityOf($(productFamilySearchResultLocator)),5 * 10000);
    await this.getProductFamilySearchResult().click();

    await this.getProductSaveBtn().click();
    
    }

    async waitForPopup(){
        
        await browser.wait(EC.visibilityOf(this.getToasterPop(), 1000));

        expect(await browser.wait(EC.visibilityOf(this.getToasterPop(), 3000)) ).toEqual(true, 'Not valid popup');
    }

    async edit(randomName){

        await browser.waitForAngularEnabled(false);    
    
        await browser.wait(EC.visibilityOf($("#navbar > ul > li:nth-child(2) > a")),5000);
        await this.header.getAdministrationMenu().click();   
    

        await this.getSearchProductInput().sendKeys(randomName);

        await browser.wait(EC.visibilityOf($(selectedListItemLocator)),10*1000);      
        await this.getSelectedListItem().click();

        await this.getEditBtn().click();

        await this.getProductNameField().sendKeys(randomName+"_EDITED");

        await this.getSaveBtn().click();
        
        await browser.sleep(5000);
    }

    async delete(randomName){
        await browser.waitForAngularEnabled(false);    
    
        await browser.wait(EC.visibilityOf($("#navbar > ul > li:nth-child(2) > a")),5000);
        await this.header.getAdministrationMenu().click();   
    

        await this.getSearchProductInput().sendKeys(randomName);

        await browser.wait(EC.visibilityOf($(selectedListItemLocator)),10*1000);      
        await this.getSelectedListItem().click();

        await browser.wait(EC.visibilityOf($(deleteBtnLocator)),10*1000);  
        await this.getDeleteBtn().click();

        await browser.sleep(5000);
    }

    
}

module.exports =  ProductsPage;