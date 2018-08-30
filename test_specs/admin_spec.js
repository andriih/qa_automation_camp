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

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        let randomProductName = `Andrii Hnatyshyn_${getRandomInt(100)}`;


        await AdminPageObject.get();
        await AdminPageObject.clickLoginButton();
        await AdminPageObject.setLogin("andrii.hnatyshyn@gmail.com");
        await AdminPageObject.setPassword("+V2fQfyfmgr");
        await AdminPageObject.clickSignInButton();

        await AdminPageObject.administrationButton();
        await AdminPageObject.newProductButton();

        await AdminPageObject.setProductName(randomProductName);

        await AdminPageObject.clickFamilyNameDropdown();
        await AdminPageObject.searchForFamily('AQA');  
                
        await AdminPageObject.saveButton();

        await AdminPageObject.searchForProduct(randomProductName);

        await AdminPageObject.checkExistance(randomProductName);

   
    });
});