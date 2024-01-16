class BaseInfo {
  constructor({ name, doors, price }) {
    this.name = name;
    this.doors = doors;
    this.price = price;
  }
}

class DefaultTransport extends BaseInfo {
  constructor({ name = "Default", doors = 4, price = 100, customerInfo = {} }) {
    super(name, doors, price);
    this.customerInfo = customerInfo;
  }
  vehicleSayHi = () => {
    console.log(this);
    return this.name + "Hi " + this.customerInfo?.name || "customer";
  };
}

class ServiceLogistic {
  transportClass = DefaultTransport;
  getTransport = (customerInfo) => {
    return new this.transportClass(customerInfo);
  };
}

class Car {
  constructor({
    name = "Car",
    doors = 4,
    price = "10 VND",
    customerInfo = {},
  }) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

const defaultTransport = new ServiceLogistic().getTransport({
  customerInfo: {
    name: "duc",
    cargoVolume: "100kg",
  },
});

console.log(defaultTransport.vehicleSayHi());
// Cach 1
const carService = new ServiceLogistic();
carService.transportClass = Car;
console.log(
  carService.getTransport({
    customerInfo: {
      name: "duc",
      cargoVolume: "100kg",
    },
  })
);

// Cach 2

class Truck {
  constructor({
    name = "Truck",
    doors = 4,
    price = "10 VND",
    customerInfo = {},
  }) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

class TruckService extends ServiceLogistic {
  transportClass = Truck;
}

const truckService = new TruckService();
console.log(
  truckService.getTransport({
    customerInfo: {
      name: "duc",
      cargoVolume: "100kg",
    },
  })
);
