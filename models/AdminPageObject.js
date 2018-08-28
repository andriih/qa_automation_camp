let AbstractPageObject = require("../models/AbstractPageObject");
let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.input");
let WebTextView = require("../controls/web.label");


class AdminPageObject extends AbstractPageObject{
    constructor() {
        super();
        this.adminButton = new WebButton(element(by.xpath(" //*[contains(text(), 'ADMINISTRATION')] ")), "Administration Button");
    }

    async admin(){
        await this.adminButton.click();
    }
    
}

module.exports = new AdminPageObject();