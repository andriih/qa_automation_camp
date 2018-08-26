describe('Protractor Demo App',() => {
    it('should have a title',() => {
        browser.get ('https://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function(){
        browser.get ('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys(browser.params.values.first);
        element(by.model('second')).sendKeys(browser.params.values.second);
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText());
        expect(element(by.binding('latest')).getText()).toEqual(`${browser.params.values.result}`);
    });
});