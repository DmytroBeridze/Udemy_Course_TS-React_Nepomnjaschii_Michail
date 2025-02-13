"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    go(speed) {
        console.log("Go" + " " + speed);
    }
}
exports.Car = Car;
const car = new Car();
// TODO---------------------61. Модификаторы доступа---+++
class Vehicle {
    drive(speed) {
        console.log("Drive with speed" + " " + speed);
        this.log(speed);
    }
    stop() {
        console.log("Stopped");
    }
    log(speed) {
        console.log("Vehicle has changed speed to" + " " + speed);
    }
    altLog(text) {
        console.log(text);
    }
}
class Car1 extends Vehicle {
    changeSpeed(speed) {
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
    constructor(color, maxSpeed) {
        super();
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
}
class Car3 extends Vehicle {
    constructor(color, maxSpeed) {
        super();
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
}
// ---------------------------
class TestClass {
    constructor(color) {
        this.color = color;
    }
}
class child1 extends TestClass {
    constructor(color) {
        super(color);
    }
}
// TODO---------------------63. Абстрактные классы---+++
class Vehicle2 {
    constructor(color) {
        this.color = color;
    }
    log(data) {
        console.log(data);
    }
}
class Car4 extends Vehicle2 {
    constructor(model, color) {
        super(color);
        this.model = model;
    }
    drive(speed) {
        return speed;
    }
}
const car4 = new Car4(452, "red");
car4.log("Some new log");
console.log(car4);
// TODO---------------------64. Геттеры и сеттеры---+++
class RectangleG {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.height * this.width;
    }
}
const rectangleG = new RectangleG(200, 400);
// -----
class CarClass {
    constructor(color, price) {
        this.color = color;
        this.price = price;
    }
    get colorGet() {
        return this.color;
    }
    set colorSet(val) {
        this.color = val;
    }
}
const CarClass1 = new CarClass("red", 500);
CarClass1.colorSet = "green";
console.log(CarClass1);
// TODO---------------------65. Статические свойства и методы---+++
class CircleSt {
    static calculate(radius) {
        return this.pi * radius * radius;
    }
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        CircleSt.pi * this.radius * this.radius;
    }
}
CircleSt.pi = 3.14;
console.log("-------------------------------------");
const circleSt1 = new CircleSt(20);
console.log(CircleSt.calculate(20));
