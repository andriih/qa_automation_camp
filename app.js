//Create a spec to verify if JS program computes correct sum of the two given integers

const sumOfTwoNumbers = (num1,num2) => {
    console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`);
    return num1+num2;
}

//Create a suite to verify if JS program (calculator) works correctly 

const plus = (a,b) =>{
    return (a+b);
};
const substr = (a,b) =>{
    return (a-b);
};
const mult = (a,b) =>{
    return (a*b);
};
const divide = (a,b) =>{
    if(b === 0){
        console.log(" not alloved to devide by ZERO");
        return false;
    }
    return (a/b);
};

const calc = (oper,a,b) => {
    switch (oper){
        case "+":
        return(plus(a,b));
        
        case "-":
        return(substr(a,b));
        
        case "*":
        return(mult(a,b));
       
        case "/":
        return(divide(a,b));

        default:
        return(`no such operator!`);
    }
}



//Create a spec to verify if JS program that compare two given numbers return true if 
//       one of the number is 50 or if their sum is 50

const compareTwoGivenNumbers = (int1,int2) => {
    if(int1===50 || int2===50){
        console.log(`Given numbers ${int1} and ${int2}`);
        return true;
    }else if(int1+int2===50){
        console.log(`Given numbers ${int1} and ${int2}`);
        return true;
    }else{
        console.log(`Given numbers ${int1} and ${int2}`);
        return false;
    }
}

module.exports.sumOfTwoNumbers = sumOfTwoNumbers;
module.exports.calc = calc;
module.exports.compareTwoGivenNumbers = compareTwoGivenNumbers;