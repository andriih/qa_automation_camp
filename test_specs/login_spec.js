let LoginPageObject = require("../models/LoginPageObject");

describe('Login page: ',() => {
    xit('Login as User' , async function() {
        await LoginPageObject.get();
        await LoginPageObject.clickLoginButton();
        await LoginPageObject.setLogin("andrii.hnatyshyn+scorer@gmail.com");
        await LoginPageObject.setPassword("$FwQ5Yue");
        await LoginPageObject.clickSignInButton();

        await LoginPageObject.getName();
        await LoginPageObject.checkName("Andrii Hnatyshyn");
    });

    xit('Login as Admin' , async function() {
        await LoginPageObject.get();
        await LoginPageObject.clickLoginButton();
        await LoginPageObject.setLogin("andrii.hnatyshyn@gmail.com");
        await LoginPageObject.setPassword("+V2fQfyfmgr");
        await LoginPageObject.clickSignInButton();

        await LoginPageObject.getName();
        await LoginPageObject.checkName("Andrii Hnatyshyn");
    });

    xit('Logout from User' , async function() {
        await LoginPageObject.get();
        await LoginPageObject.clickLoginButton();
        await LoginPageObject.setLogin("andrii.hnatyshyn+scorer@gmail.com");
        await LoginPageObject.setPassword("$FwQ5Yue");
        await LoginPageObject.clickSignInButton();

        await LoginPageObject.logout();

    
    });
});