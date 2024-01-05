class Uber{
    constructor(baseFare,costPerKilometer,costPerMinute){
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distance,time){
        const distanceCost = distance*this.costPerKilometer;
        const timeCost = time*this.costPerMinute;
        const totalFare = distanceCost + timeCost + this.baseFare;
        return totalFare;
    }
    calculateUberPrice(distance, time){
        const totalFare = this.calculatePrice(distance,time);
        console.log(`The BaseFare is $${this.baseFare}`);
        console.log(`Distance Cost is $${distance*this.costPerKilometer} and Time Cost is $${time*this.costPerMinute}`);
        console.log(`Total Fare of Uber is $${totalFare}`);
    }
    
}
const obj1 = new Uber(7,0.7,0.3);
obj1.calculateUberPrice(5, 10);