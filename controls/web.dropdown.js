let WebControl = require("../base/web.control");

class WebDropdownView extends WebControl {
    constructor(elementLocationObject, webElement, title){
        super(elementLocationObject, webElement, title);
    }

    async getElement() {
        await this.initializeWebControl();
        console.log(`Getting Element from  ${this.constructor.name} \" ${this.controlTitle}\"`);
        return await this.getBaseControlWebElement().click();
    }
}

module.exports = WebDropdownView;