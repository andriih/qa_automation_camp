let AdminPageObject = require("../models/AdminPageObject");

describe('Admin page: ',() => {
   
    xit('Login as Admin' , async function() {
        await AdminPageObject.get();
        await AdminPageObject.clickLoginButton();
        await AdminPageObject.setLogin("andrii.hnatyshyn@gmail.com");
        await AdminPageObject.setPassword("+V2fQfyfmgr");
        await AdminPageObject.clickSignInButton();

        await AdminPageObject.getName();
        await AdminPageObject.checkName("Andrii Hnatyshyn");
    });
    
    it('Create Product:' , async function() {
        await AdminPageObject.get();
        await AdminPageObject.clickLoginButton();
        await AdminPageObject.setLogin("andrii.hnatyshyn@gmail.com");
        await AdminPageObject.setPassword("+V2fQfyfmgr");
        await AdminPageObject.clickSignInButton();

        await AdminPageObject.admin();
    
        
    });
});