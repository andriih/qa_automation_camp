let Vehicle = require('./Vehicle.js');

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed){
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    displayInfo(){
        super.displayInfo();
    };

    transportContainer() {
        console.log('I am starting transporting heavy container.');
    }
}

module.exports = Truck;
