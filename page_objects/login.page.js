
let ProductsPage = require('./products.page');

let loginBtnLocator = "button.btn.login-button";
let emailInputLocator = "#email";
let passwordInputLocator = "#userPassword";
let signInBtnLocator = "div.iframe-wrap > div.row >div >button.login-button";

class LoginPage {
    constructor(){ }

    getLoginBtn(){
        return element(by.css(loginBtnLocator));
    }

    getEmailInput(){
        return element(by.css(emailInputLocator));
    }

    getPasswordInput(){
        return element(by.css(passwordInputLocator));
    }

    getSignInBtn(){
        return element(by.css(signInBtnLocator));
    }

    async open(url){
        await browser.get(url);

        return this;
    }

    async login(email,password){
        await this.getLoginBtn().click();
        await this.getEmailInput().sendKeys(email);
        await this.getPasswordInput().sendKeys(password);
        await this.getSignInBtn().click();
        
        return new ProductsPage();
    }
}

module.exports = LoginPage;