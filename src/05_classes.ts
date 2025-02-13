interface ICar {
  go(speed: number): void;
}

export class Car implements ICar {
  go(speed: number) {
    console.log("Go" + " " + speed);
  }
}
const car = new Car();

// TODO---------------------61. Модификаторы доступа---+++

class Vehicle {
  public drive(speed: number): void {
    console.log("Drive with speed" + " " + speed);
    this.log(speed);
  }
  public stop() {
    console.log("Stopped");
  }
  private log(speed: number) {
    console.log("Vehicle has changed speed to" + " " + speed);
  }
  protected altLog(text: string) {
    console.log(text);
  }
}

class Car1 extends Vehicle {
  public changeSpeed(speed: number) {
    this.drive(speed);
    this.altLog("Altlog test");
  }
}

const car1 = new Car1();
// car1.drive(120);
// car1.stop();
car1.changeSpeed(456);

// car1.log()// error

// TODO---------------------62. Нюансы конструктора---+++
class Car2 extends Vehicle {
  color: string;
  maxSpeed: number;
  constructor(color: string, maxSpeed: number) {
    super();
    this.color = color;
    this.maxSpeed = maxSpeed;
  }
}

class Car3 extends Vehicle {
  constructor(public color: string, public maxSpeed: number) {
    super();
  }
}
// ---------------------------
class TestClass {
  constructor(public color: string) {}
}

class child1 extends TestClass {
  constructor(color: string) {
    super(color);
  }
}

// TODO---------------------63. Абстрактные классы---+++

abstract class Vehicle2 {
  abstract model: number;

  constructor(public color: string) {}

  abstract drive(speed: number): number;
  log(data: string) {
    console.log(data);
  }
}

class Car4 extends Vehicle2 {
  constructor(public model: number, color: string) {
    super(color);
  }
  drive(speed: number): number {
    return speed;
  }
}

const car4 = new Car4(452, "red");
car4.log("Some new log");
console.log(car4);

// TODO---------------------64. Геттеры и сеттеры---+++
class RectangleG {
  constructor(public width: number, public height: number) {}
  get area(): number {
    return this.height * this.width;
  }
}
const rectangleG = new RectangleG(200, 400);

// -----
class CarClass {
  constructor(public color: string, public price: number) {}

  get colorGet(): string {
    return this.color;
  }
  set colorSet(val: string) {
    this.color = val;
  }
}

const CarClass1 = new CarClass("red", 500);
CarClass1.colorSet = "green";
console.log(CarClass1);

// TODO---------------------65. Статические свойства и методы---+++
class CircleSt {
  static pi: number = 3.14;
  static calculate(radius: number) {
    return this.pi * radius * radius;
  }

  constructor(public radius: number) {}
  getArea() {
    CircleSt.pi * this.radius * this.radius;
  }
}

console.log("-------------------------------------");
const circleSt1 = new CircleSt(20);

console.log(CircleSt.calculate(20));
