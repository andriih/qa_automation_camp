let Car = require('./Car.js');
let Truck = require('./Truck.js');


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

        let truck = new Truck('MAN','2000', 120);
        let car = new Car('Toyota','1990', 220);

        truck.transportContainer(); car.transportPeople();

        Car.showMaxSpeed();

        truck.displayInfo();

        car.carPrice();
    }
  });