browser.ignoreSynchronization = true;
let EC = protractor.ExpectedConditions;

let LoginPage = require('../page_objects/login.page');
let names = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let randomProductName = `Andrii Hnatyshyn_${getRandomInt(1000)}`;

names.push(randomProductName);

console.log(names);



describe('Product suit:', ()=>{
    let loginPage = new LoginPage();
  
    xit('Verify new Product creation:', async () => {   

    await allure.createStep('Open EDS page: ', async () =>{  
    
        browser.sleep(5000); 
        //await browser.wait(EC.urlIs('eds_university.eleks.com'), 5000);
        await loginPage.open('http://eds_university.eleks.com/');
    })();

    await allure.createStep('Step 2: Create product', async () =>{
        await browser.sleep(5000);
        let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr');
        await productsPage.create(randomProductName); 
         
        await productsPage.waitForPopup();
        
    })();   
    });

    xit('Verify the ability to edit already created product:', async()=>{
        await allure.createStep('Open EDS page: ', async () =>{  
            //await browser.wait(EC.urlIs('http://eds_university.eleks.com/'),5000);
            browser.sleep(5000);
            await loginPage.open('http://eds_university.eleks.com/');
        })();

        await allure.createStep('Open already existing Product', async () =>{  
            await browser.sleep(5000);
            let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr');

            await productsPage.edit(names[names.length-1]);

        })();
    });

    it('Verify the ability to delete already created product:', async()=>{
        await allure.createStep('Open EDS page: ', async () =>{  
            browser.sleep(5000);
            await loginPage.open('http://eds_university.eleks.com/');
        })();

        await allure.createStep('Open already existing Product', async () =>{  
            await browser.sleep(5000);
            let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr')
       
            await productsPage.delete("Andrii Hnatyshyn_766");
        })();
    });
});