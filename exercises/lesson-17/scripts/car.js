class Car {
  brand;
  model;

  constructor(carDetails) {
    if (!carDetails) {
      return;
    }

    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}`);
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

car1.displayInfo();
car2.displayInfo();