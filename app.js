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

        const SymbolPresentInStr = (str, symbol) => {

            if (str !== "" && symbol !== "") {
        
                let res = str.toLowerCase().indexOf(symbol.toLowerCase());
                if (res !== -1) {
                    console.log(`Symbol "${symbol}" is present in string "${str}".`);
                    return true;
                }
                console.log(`Symbol "${symbol}" is NOT present in string "${str}".`);
                return false;
            }
            console.log('Please, make sure that all parameters are NOT EMPTY!');
        }
        const StrBlankOrNot = (string) => {
            let str = string.trim();
            if (str.length === 0 || str[0] === 0 && str === "") {
                console.log(`String ${str} is blank!`);
                return true;
            }
            console.log(`String ${str} is NOT blank!`);
            return false;
        }
        const StringInAbbreviatedForm = (name) => {
            let trimName = name.trim();
            if( trimName.indexOf(" ") === -1 ){
                console.log("Should be two names!");
                return;
            }else{
                if (trimName.length !== 0) {
                    let res = trimName.split(" ");
                    let firstLet = res[0][0].toUpperCase();
                    let secondLet = res[1][0].toUpperCase();
            
                    console.log(`${firstLet}.${secondLet}.`);
                } 
            }
            
        }
        const LargestInt = (firstInt, secondInt) => {
            if (firstInt > secondInt) {
                return `${firstInt} is larger then ${secondtInt}`;
            } else if (firstInt < secondInt) {
                return `${secondInt} is larger then ${firstInt}`;
            } else {
                return `${firstInt} = ${secondInt}`;
            }
        }
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
        
        SymbolPresentInStr("Valere","va"); //Symbol "va" is present in string "Valere".
        StrBlankOrNot("              ");//String  is blank!
        StringInAbbreviatedForm("andrii hnatyshyn"); //A.H.
        console.log(LargestInt(-23,0.1)); //0.1 is larger then -23
        threeIntsSort(22, -3, 8); //-3 , 8 ,22
        
    }
  });