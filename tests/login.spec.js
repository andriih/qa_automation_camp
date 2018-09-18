browser.ignoreSynchronization = true;
let EC = protractor.ExpectedConditions;

let LoginPage = require('../page_objects/login.page');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let randomProductName = `Andrii Hnatyshyn_${getRandomInt(1000)}`;

describe('Login suit:', ()=>{
    let loginPage = new LoginPage();

   it('Login pass test', async () => {

       await allure.createStep('Step 1', async () =>{
        
            await loginPage.open('http://eds_university.eleks.com/');
            
            let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr');

            expect(await productsPage.header.isHeaderVisible()).toEqual(true);
       })();
        
    });

  
    it('Prod tab:', async () => {   

    await allure.createStep('Open EDS page: ', async () =>{  
        //await browser.wait(EC.urlIs('http://eds_university.eleks.com/'),5000);
        browser.sleep(5000);
        await loginPage.open('http://eds_university.eleks.com/');
    })();

   await allure.createStep('Step 2: Create product', async () =>{
        await browser.sleep(5000);
        let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr');
        await productsPage.create(randomProductName); 
       
        expect(await productsPage.verifyFlag()).toEqual(true);
        

    })();
       
    });
});