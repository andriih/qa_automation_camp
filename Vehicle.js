class Vehicle{
    constructor(carModel, carYear, maxSpeed){
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }

    carPrice(){
        console.log(`This is car price for Car object!`);
    }

    displayInfo(){
        console.log(`Name: ${this.model}
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type}`);
    }
}

module.exports = Vehicle;
