let WebControl = require("../base/web.control");

class WebTextInput extends WebControl {
    constructor(elementLocationObject, webElement, title){
        
        super(elementLocationObject, webElement, title);

    }

    async sendKeys(text){
        await this.initializeWebControl();
        consoleLogger.debug(`Send \"${text}"\ to ${this.constructor.name} \" ${this.controlTitle}\"`);
        await this.getBaseControlWebElement().sendKeys(text);
    }
}

module.exports = WebTextInput;