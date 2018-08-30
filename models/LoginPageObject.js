let AbstractPageObject = require("../models/AbstractPageObject");
let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.input");
let WebTextView = require("../controls/web.label");

browser.ignoreSynchronization = true;

class LoginPageObject extends AbstractPageObject {
    constructor() {
      super();
    }
}

module.exports = new LoginPageObject();