describe('Login Functionality', () => {
    
    it('User should be able to login into eds_university.eleks.com', async () => {
        await browser.get('http://eds_university.eleks.com/login');

        await element(by.css('.login-button')).click();
        await element(by.id('email')).sendKeys("andrii.hnatyshyn+scorer@gmail.com");
        await element(by.id('userPassword')).sendKeys("$FwQ5Yue");
        await element(by.css('.iframe-wrap .login-button')).click();

        await element(by.css('body > app > main > modules-navigator > products > div.container > div > div:nth-child(2) > div > button.btn.gds-btn.gds-btn-default.gds-btn-sm')).click();
        
        await element(by.css('span.caret')).click();
        await element(by.css('a.dropdown-item>strong')).click();

        let name = await element(by.css(".user-name")).getText();
        expect(name).toEqual('Andrii Hnatyshyn');
        console.log("User Name - " + name );
    });
});