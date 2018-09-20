browser.ignoreSynchronization = true;

let LoginPage = require('../page_objects/login.page');

xdescribe('Login suit:', ()=>{
    let loginPage = new LoginPage();

   it('Login Admin', async () => {

       await allure.createStep('Step 1: get URl', async () =>{
        
            await loginPage.open('http://eds_university.eleks.com/');
            
            let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr');

            expect(await productsPage.header.isHeaderVisible()).toEqual(true);
       })();

       await allure.createStep('Step 2: Enter creds for Admin', async () =>{
        
        let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr');

        expect(await productsPage.header.isHeaderVisible()).toEqual(true);
   })();
        
    });

    it('Login as Scorer', async () => {

        await allure.createStep('Step 1: Get Url', async () =>{
         
             await loginPage.open('http://eds_university.eleks.com/');
             
             
        })();

        await allure.createStep('Step 2: Enter creds for Scorer', async () =>{
            
            let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr');

            expect(await productsPage.header.isHeaderVisible()).toEqual(true);
       })();
         
     });
});