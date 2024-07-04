import { Car } from './car.js';

class RaceCar extends Car {

  accelration = 0;

  constructor(carDetails) {
    if (!carDetails) {
      return;
    }

    super(carDetails);

    this.accelration = carDetails.accelration;
  }

  go() {
    this.speed += this.accelration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk.');
  }
}

const raceCar = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();