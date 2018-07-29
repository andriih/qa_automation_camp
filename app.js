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
        
        console.log('Task 1:')
        const firstInt = 24;
        const secondInt = 26;
        console.log(`Sum of ${firstInt} and ${secondInt} is ${firstInt+secondInt}`);

        console.log('Task 2:');
        const addTest = 'Test_';
        let someStr = 'hello';
        console.log(`${addTest+someStr}`);

        console.log('Task 3:');
        let firstName = 'Andrii';
        let lastName = 'Hnatyshyn';
        let age = 26;
        console.log(`Your full name is ${firstName} ${lastName}. You have ${age} years old.`);

        console.log('Task 4:');
        let someInt = 120;
        let compareRes = someInt > 100 ? 'bigger' : 'NOT bigger';
        console.log(`Number ${someInt} is ${compareRes} than 100!`);

        console.log('Task 5:');
        let compareInt = firstInt > secondInt  ? 'bigger' : 'NOT bigger';
        console.log(`First Number (${firstInt}) is ${compareInt} than Second number (${secondInt})`);
        
        console.log('Task 6:');
        if(firstInt===50 || secondInt===50){
            console.log(`Given numbers ${firstInt} and ${secondInt}`);
            console.log('One of the numbers is 50. So TRUE...');
        }else if(firstInt+secondInt===50){
            console.log(`Given numbers ${firstInt} and ${secondInt}`);
            console.log('Sum of the numbers is 50. So TRUE...');
        }else{
            console.log(`Given numbers ${firstInt} and ${secondInt}`);
            console.log('numbers are not equel to 50 and their sum also not equal to 50. So FALSE...');
        }

        console.log('Task 7:');
        const givenNumber = 14;

       if(givenNumber%3===0 && givenNumber%3===7){
            console.log(`Given number ${givenNumber} is multiple to 3 and 7!`);
       }else if(givenNumber%3===0){
            console.log(`Given number ${givenNumber} is multiple to 3 !`);
        }else if(givenNumber%7===0){
            console.log(`Given number ${givenNumber} is multiple to 7 !`);
        }else{
            console.log(`Given number ${givenNumber} is NOT multiple to 3 and 7 !`);
        }
    }   
  }); 