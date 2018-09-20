browser.ignoreSynchronization = true;
let EC = protractor.ExpectedConditions;
let poductsTabScorerLocator = "ul.gds-navigation > li.active";

let LoginPage = require('../page_objects/login.page');

describe('Login suit:', ()=>{
    let loginPage = new LoginPage();

   it('Verify Login as Admin', async () => {
        await allure.createStep('Step 1: Open URl', async () =>{
            
            await loginPage.open('http://eds_university.eleks.com/');
                
        })();

        await allure.createStep('Step 2: Enter creds for Admin', async () =>{
            
            let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr');

            expect(await productsPage.header.isHeaderVisible()).toEqual(true);    
        })();   
    });

    it('Verify Logout as Admin', async () => {
        await allure.createStep('Step 1: Open URl', async () =>{
            await loginPage.open('http://eds_university.eleks.com/');   
        })();

        await allure.createStep('Step 2: Enter creds for Admin', async () =>{ 
             await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr')
        })();   

        await allure.createStep('Logout', async () =>{
            await loginPage.logout();        
        })();   
    });
});
