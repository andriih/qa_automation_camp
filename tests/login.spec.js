browser.ignoreSynchronization = true;

let LoginPage = require('../page_objects/login.page');

xdescribe('Login suit:', ()=>{
    let loginPage = new LoginPage();

   it('Login pass test', async () => {

       await allure.createStep('Step 1', async () =>{
        
            await loginPage.open('http://eds_university.eleks.com/');
            
            let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr');

            expect(await productsPage.header.isHeaderVisible()).toEqual(true);
       })();
        
    });
});