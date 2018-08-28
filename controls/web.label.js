let WebControl = require("../base/web.control");

class WebTextView extends WebControl {
    constructor(elementLocationObject, webElement, title){
        
        super(elementLocationObject, webElement, title);

    }

    async getLabel() {
        consoleLogger.debug(`Getting label from \"${text}"\ to ${this.constructor.name} \" ${this.controlTitle}\"`);
        return await new WebTextInput(this, element(by.css(this.getLocatorString()+" label"))).getText();
    }
}

module.exports = WebTextView;