const randomstring = require("randomstring");
const fs = require('fs');

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


        //JSON
        let student = {
            name:"Andrii",
            surname:"Hnatyshyn",
            rate:"110"
        }

        console.log("Student`s name is "+student.name);

        let studentStr = JSON.stringify(student);
        console.log("Student string "+studentStr);

        console.log("Student`s rate is "+student.rate);

        //Random

        const stringWithProvidedLength = (length) =>{
            
            if(typeof length !== 'number'){
                console.log('Length MUST be numeric!');
                return false;
            }else{
                return randomstring.generate({
                    length:length,
                    charset: "alphabetic"
                });
            }
        }
        console.log(stringWithProvidedLength(20));

        //////////////////////////////////////////////////////

        const randomNumber = (length) => { //number of values
            if(typeof length === 'number'){
                return Math.floor((Math.random() * Math.pow(10,length)) + 1);
            }else{
                return ('Length MUST be numeric!');  
            }

            
        }
        console.log(randomNumber(20)); //00000000000000000000



        //////FILE SYSTEM MODULE

        fs.open('index.html', 'w', function (err, file) { //Cretaion
            if (err) throw err;
            console.log('index.html created!');
        });

        fs.appendFile('index.html', 'Some HTML code', (err) => {
            if (err) throw err;
            console.log('The "Some HTML code" was appended to file!');
        });

        new Promise((resolve, reject) => setTimeout(() => { // experimental delay
            
            fs.writeFile("index.html", "Other HTML code", function(err) {
                if (err) throw err;
                console.log('index.html was updated!');
            }); 
            resolve();
            
            },3000)).then(()=>{
                
                fs.readFile('index.html','utf8' ,(err, data) => {
                    if (err) throw err;
                    console.log(`index.html:" ${data} "`);
            });
            
        });
    }   
  });