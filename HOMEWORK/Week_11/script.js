`use strict`;

class Vehicle {
  constructor(name, fuel, wheels) {
    this.name = name;
    this.wheels = wheels;
    this.fuel = fuel;
  }
}

class Car extends Vehicle {
  constructor(name, fuel) {
    super(name, fuel);
    this.wheels = 4;
  }
}

class Bus extends Vehicle {
  constructor(name, fuel) {
    super(name, fuel);
    this.wheels = 6;
  }
}

class Motorcycle extends Vehicle {
  constructor(name, fuel) {
    super(name, fuel);
    this.wheels = 2;
  }
  highwayDrive() {
    console.log(`${this.name} is driving on the highway!`);
  }
}

const mercedes = new Car(`Mercedes`, `gas`);
const schoolBus = new Bus(`School Bus`, `diesel`);
const kawasaki = new Motorcycle(`Kawasaki`, `gas`);

kawasaki.highwayDrive();

class Highway {
  constructor(...carType) {
    carType.forEach((elem) => {
      console.log(`${elem.name} is on the highway!`);
    });
  }
}

const a1 = new Highway(mercedes, schoolBus, mercedes);
