let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.input");
let WebTextView = require("../controls/web.label");


class AbstractPageObject{
    constructor() {

        let WebButton = require("../controls/web.button");
        let WebTextInput = require("../controls/web.input");
        let WebTextView = require("../controls/web.label");

        this.loginButton = new WebButton(element(by.css('.login-button')), "Login Button");
        this.signInButton = new WebButton(element(by.css('.iframe-wrap .login-button')), "Sign In Button"); 
    
        this.loginField = new WebTextInput(element(by.id('email')), "Login field");
        this.passwordField = new WebTextInput(element(by.id('userPassword')), "Password field");
    
        this.getText = new WebTextView(element(by.css(".user-name")),"Label");
    
        this.logoutDrop = new WebButton(element(by.css('span.caret')), 'Logout Dropdown');
        this.logoutButton = new WebButton(element(by.css('a.dropdown-item>strong')),"Logout Button");
  
    }

    async get() {
        await browser.get('http://eds_university.eleks.com/login');
    }
    
    async setLogin(login){
        await this.loginField.sendKeys(login);
    }
    
    async setPassword(pass){
        await this.passwordField.sendKeys(pass);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async clickSignInButton(){
        await this.signInButton.click();
    }

    async getName (){
       return this.name = await this.getText.getLabel();
    }

    async checkName (name){
        expect(this.name).toEqual(name);
        console.log("User Name - " + this.name );
    }

    async logout(){
        await this.logoutDrop.click();
        await this.logoutButton.click();
    }
}
module.exports =  AbstractPageObject;
