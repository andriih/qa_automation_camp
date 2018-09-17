browser.ignoreSynchronization = true;

let WebButton = require("../controls/web.button");
let WebInput = require("../controls/web.Input");

let ProductsPage = require('./products.page');

let loginBtnLocator = "button.btn.login-button";
let emailInputLocator = "#email";
let passwordInputLocator = "#userPassword";
let signInBtnLocator = "div.iframe-wrap > div.row >div >button.login-button";

let logoutDropdownLocator = "span.caret";
let logoutButtonLocator = "a.dropdown-item>strong";


class LoginPage {
    constructor(){ }

    getLoginBtn(){
        return new WebButton(element(by.css(loginBtnLocator)),"Login button");
    }

    getEmailInput(){
        return new WebInput(element(by.css(emailInputLocator)),"Email input field");
    }

    getPasswordInput(){
        return new WebInput(element(by.css(passwordInputLocator)),"Password input field");
    }

    getSignInBtn(){
        return new WebButton(element(by.css(signInBtnLocator)),"Sign In button");
    }

    getLogoutDropdown(){
        return new WebButton(element(by.css(logoutDropdownLocator)), 'Logout Dropdown');
    }
    
    getLogoutButton(){
        return new WebButton(element(by.css(logoutButtonLocator)),"Logout Button");
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

    async logout(){  
          await this.getLogoutDropdown().click();
          await this.getLogoutButton().click();
    }
}

module.exports = LoginPage;