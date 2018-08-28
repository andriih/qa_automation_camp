let WebControl = require("../base/web.control");

class WebDropdown extends WebControl {
    constructor(webElement, title) {
        super(webElement, title);
    }

    async open() {
        consoleLogger.debug(`Opening ${this.constructor.name}\"${this.controlTitle}\"`)
        await this.click();
    }

    
}

module.exports = WebDropdown;