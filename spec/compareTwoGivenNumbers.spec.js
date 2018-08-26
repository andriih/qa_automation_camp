const funcs = require('../app');

describe('Compare numbers:',()=>{
    it('Compare two given numbers',() => {
        const result = funcs.compareTwoGivenNumbers(23,27);

        expect(result).toBe(true);
    });
});