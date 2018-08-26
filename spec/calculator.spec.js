const funcs = require('../app');

describe('Calculator: ', ()=>{
    
    it('Plus opearation ',() => {
        let res = funcs.calc("+" , 12, -123); 
        expect(res).toBe(-111);
    });

    it('Substraction opearation ',() => {
        let res = funcs.calc("-" , 12, 2); 
        expect(res).toBe(10);
    });

    it('Multiplication opearation ',() => {
        let res = funcs.calc("*" , 12, 3); 
        expect(res).toBe(36);
    });

    it('Division opearation ',() => {
        let res = funcs.calc("/" , 12, 4); 
        expect(res).toBe(3);
    });

    it('Division by zero',() => {
        let res = funcs.calc("/" , 12, 2); 
        expect(res).toBe(false, "argument not 0");
    });

});