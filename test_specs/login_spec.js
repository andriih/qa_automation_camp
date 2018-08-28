let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.input");
let WebTextView = require("../controls/web.label");

describe('Login Functionality', () => {

    let loginButton = new WebButton(element(by.css('.login-button')), "Login Button");
    let signInButton = new WebButton(element(by.css('.iframe-wrap .login-button')), "Sign In Button"); 

    let loginField = new WebTextInput(element(by.id('email')), "Login field");
    let passwordField = new WebTextInput(element(by.id('userPassword')), "Password field");

    let getText = new WebTextView(element(by.css(".user-name")),"Label");

    let logoutDrop = new WebButton(element(by.css('span.caret')), 'Logout Dropdown');
    let logoutButton = new WebButton(element(by.css('a.dropdown-item>strong')),"Logout Button");

    it('User should be able to login into eds_university.eleks.com', async () => {
        await browser.get('http://eds_university.eleks.com/login');

        await loginButton.click();
     
        await loginField.sendKeys("andrii.hnatyshyn+scorer@gmail.com");
        await passwordField.sendKeys("$FwQ5Yue");

        await signInButton.click();

        let name = await getText.getLabel();

        console.log(name);

        expect(name).toEqual('Andrii Hnatyshyn');
        console.log("User Name - " + name );
    });

    it('Also, ADMINISTRATOR should be able to login into eds_university.eleks.com', async () => {
        await browser.get('http://eds_university.eleks.com/login');

        await loginButton.click();
     
        await loginField.sendKeys("andrii.hnatyshyn@gmail.com");
        await passwordField.sendKeys("+V2fQfyfmgr");

        await signInButton.click();

        let name = await getText.getLabel();

        expect(name).toEqual('Andrii Hnatyshyn');
        console.log("User Name - " + name );
    });

    it('User should be able to Logout from eds_university.eleks.com', async () => {
        await browser.get('http://eds_university.eleks.com/login');
        await loginButton.click();
        await loginField.sendKeys("andrii.hnatyshyn+scorer@gmail.com");
        await passwordField.sendKeys("$FwQ5Yue");
        await signInButton.click();

        let name = await getText.getLabel();
           
        await logoutDrop.click();
        await logoutButton.click();

        expect(name).toEqual('Andrii Hnatyshyn');
        console.log("User Name - " + name );
    });

    

});