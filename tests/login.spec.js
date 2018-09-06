browser.ignoreSynchronization = true;
let LoginPage = require('../page_objects/login.page');

describe('Login suit:', ()=>{
    let loginPage = new LoginPage();

    it('Login pass test', async () => {

        allure.createStep('Step 1', async () =>{
        
            await loginPage.open('http://eds_university.eleks.com/');
            let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr');

            expect(await productsPage.header.isHeaderVisible()).toEqual(true);
       });
        
    });

    xit('Login pass test', async () => {
            
            let loginPage = new LoginPage();
           
            await loginPage.open('http://eds_university.eleks.com/');
            
            let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr');
           
            await productsPage.create();

            await browser.sleep(5000);
            
            //expect(await productsPage.header.isHeaderVisible()).toEqual(true);
        
    });
});