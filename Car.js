let Vehicle = require('./Vehicle.js');

 class Car extends Vehicle{
    constructor(carModel, carYear, maxSpeed){
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

     static showMaxSpeed(){
         console.log('Max speed of the car is : 220 km/ph');
     }

     carPrice(){
         console.log(`The ${this.model}  ${this.year} issue year cost about ${this.year*2} $`);
     }

    transportPeople(){
        console.log('I am starting transporting passengers.');
    }
}

module.exports = Car;