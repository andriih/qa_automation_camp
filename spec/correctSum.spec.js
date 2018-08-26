const funcs = require('../app');

 
describe('Calculation suite: ',() => {
    it('Validation of correct sum of the two given integers',() => {
        const result = funcs.sumOfTwoNumbers(25,25);
        expect(result).toBe(50,`sum of the two given integers is  ${result}`);
    });
   
    it('Validation of correct sum of the two given Negative integers',() => {
const funcs = require('../funcs');
        const result = funcs.sumOfTwoNumbers(-25,-25);
        expect(result).toBe(-50,`sum of the two given Negative integers is  ${result}`);
    });

    it('Validation of correct sum of the two given Negative integers',() => {
        const result = funcs.sumOfTwoNumbers(-25,-25);
        expect(result).toBe(-50,`sum of the two given Negative integers is  ${result}`);
    });
});