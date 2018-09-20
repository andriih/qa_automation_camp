let productsMenuLocator = "#navbar > ul > li:nth-child(1) > a";
let administrationMenuLocator = "#navbar > ul > li:nth-child(2) > a";
let poductsTabScorerLocator = "ul.gds-navigation > li.active";

class HeaderPage {
    constructor(){}

    getProductsMenu(){
        return element(by.css(productsMenuLocator));  
    }

    getAdministrationMenu(){
        return element(by.css(administrationMenuLocator));
    }

    getProdMenuOnScorer(){
        return element(by.css(poductsTabScorerLocator)); 
    }

    async waitForProdMenuOnScorer(){
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getProdMenuOnScorer(), 15000));
    }


    async waitForHeaderAvailable(){
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getAdministrationMenu(), 15000));
    }

    async isProductsTabVisible(){
        await browser.wait(protractor.ExpectedConditions.visibilityOf("ul.gds-navigation > li.active", 15000));
    }

    async isHeaderVisible(){    
        await this.waitForHeaderAvailable();
        return await this.getProductsMenu().isDisplayed() 
            && await this.getAdministrationMenu().isDisplayed();
    }

    async isProdMenuVisible(){
        return await this.getProdMenuOnScorer().isDisplayed();
    }
}

module.exports = HeaderPage;