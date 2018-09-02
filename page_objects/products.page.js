let HeaderPage = require("./header.page");

let addProdLinkLocator = "div.form-group > a.section-body__actions >span:nth-child(2)";


class ProductsPage {
    constructor(){
        this.header = new HeaderPage();
    }

    getAddProdLink(){
        return element(by.css(addProdLinkLocator));
    }


}

module.exports =  ProductsPage;