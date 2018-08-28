let WebButton = require("../controls/web.button");

xdescribe('Login Functionality', () => {

    let loginButton = new WebButton(element(by.css('.login-button')), "Login Button");
    let signInButton = new WebButton(element(by.css('.iframe-wrap .login-button')), "Sign In Button"); 

    it('User should be able to login into eds_university.eleks.com', async () => {
        await browser.get('http://eds_university.eleks.com/login');

        await loginButton.click();
     
        await element(by.id('email')).sendKeys("andrii.hnatyshyn+scorer@gmail.com");
        await element(by.id('userPassword')).sendKeys("$FwQ5Yue");

        await signInButton.click();

        let name = await element(by.css(".user-name")).getText();

        expect(name).toEqual('Andrii Hnatyshyn');
        console.log("User Name - " + name );
    });
});