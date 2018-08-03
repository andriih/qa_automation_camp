console.log("\nNice work! Your first application have been launched.");
console.log("Now, I need to know your name, type it below: ");

let stdin = process.openStdin();

stdin.addListener("data", (txt) => {
    if(txt.toString().trim() === "quit") {
        console.log("\nHave a nice JS trip! Bye-bye");
        stdin.end();
    } else {
        console.log(`\nHi ${txt.toString().trim()}, nice to meet you at Eleks QA Academy 2018. I am sure you'll become great in your job.`);
        console.log(`${txt.toString().trim()}, to quit this application you can use 'Ctrl + C' keys, or type 'quit' and hit 'Enter'`); 
		
		const threeIntsSort = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            console.log(`${num3} , ${num2} ,${num1}`);
        }else {
            console.log(`${num2} , ${num3} ,${num1}`);
        }
    }
    if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            console.log(`${num3} , ${num1} ,${num2}`);
        }else {
            console.log(`${num1} , ${num3} ,${num2}`);
        }
    }
    if (num3 >num1 && num3 > num2) {
        if (num1 > num2) {
            console.log(`${num2} , ${num1} ,${num3}`);
        }else {
            console.log(`${num1} , ${num2} ,${num3}`);
        }
    }
    if(num1 === num2 && num2 === num3){
        console.log(`${num1} , ${num2} ,${num3}`);
    }
}

let str = 'https://eleks.com/services/quality-assurance-and-testing-services/';
const urlSplit = (url) => {
    let arr = [];
    let res = str.trim().split(/[/:.]/);
    for(let i=0;i<=res.length-1;i++){
        if(res[i] !== ""){
            arr.push(res[i]);
        }    
    }
    console.log(arr);
}
urlSplit(str);

let circle = {type:"circle", r:4}
let triangle = {type:"triangle", a:4 , b:6}
let square = {type:"square",a:3}

const area =(obj)=>{
    switch (obj.type){
        case "triangle":
        return 0.5 * obj.a * obj.b;
        case "square":
        return obj.a * obj.a;
        default: return "no such obj";
        case "circle":
        return Math.round(Math.PI * (obj.r * obj.r));
        break;
    }
}

threeIntsSort(area(circle),area(triangle),area(square));

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
        return;
    }
    return (a/b);
};

const calc = (oper,a,b) => {
    switch (oper){
        case "+":
        console.log(plus(a,b));
        break;
        case "-":
        console.log(substr(a,b));
        break;
        case "*":
        console.log(mult(a,b));
        break;
        case "/":
        console.log(divide(a,b));
        break;
        default:
        console.log(`no such operator!`);
        break;
    }
}

calc("/",12,4);
	
	}   
  });