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

        
const lastElemOfArray = (arr) => {
    return arr[arr.length-1];
}
console.log(lastElemOfArray([1,2,3,599]));

const arrToString = (arr) => {
    return arr.join(' ');
}
let res = arrToString(["one","two","three"]);
console.log(res);

const computingValOfArr = (arr1,arr2) => {
    let arr3 = [];
    for(let i=0; i <= arr1.length-1; i++){
        arr3.push(arr1[i]+arr2[i]);
        console.log(arr3[i]);
    }
}
computingValOfArr([1,2,3,"num"],[4,5,6,"let"]);

let rectangle = {
    a: 7,
    b: 6,
    getArea:function(){
        return `Area of rectangle with sides ${this.a} and ${this.b} is ${this.a * this.b}`;
    },
    getPerimeter:function(){
        return `Perimeter of rectangle with sides ${this.a} and ${this.b} is ${ this.a*2+this.b*2}`;
    }
}

console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
        
    }
  });