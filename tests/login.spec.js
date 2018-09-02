browser.ignoreSynchronization = true;
let LoginPage = require('../page_objects/login.page');

describe('Login suit:',()=>{
    it('Login pass test',async () => {
        let loginPage = new LoginPage();

        await loginPage.open('http://eds_university.eleks.com/');
        let productsPage =  await loginPage.login('andrii.hnatyshyn@gmail.com','+V2fQfyfmgr');

        expect(await productsPage.header.isHeaderVisible()).toEqual(true);
    });
});