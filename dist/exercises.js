"use strict";
// *------------------------------Задание 1: Базовая типизация функций---+++
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperature = exports.Rectangle = void 0;
exports.gradeDeveloper = gradeDeveloper;
exports.keys = keys;
exports.values = values;
exports.createMap = createMap;
function slice(str, start, end) {
    let newStr = "";
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }
    return newStr;
}
function login(user) {
    return user.login.trim() && user.password.trim() ? `Hello user` : false;
}
const UserDev = {
    login: "user",
    skills: ["Lorem", "Ipsum", "Dolor"],
    level: "junior",
};
function gradeDeveloper(user, newLevel) {
    user.level = newLevel;
    console.log(user);
}
gradeDeveloper(UserDev, "senior");
const carT = {
    brand: "CarBarand",
    isNew: true,
    isSale: false,
    model: "CaraModel",
    price: 456000,
    title: "CarTitle",
    type: "CarType",
    wheels: 4,
    year: new Date(2005, 6, 2),
};
const catI = {
    type: "",
    model: "",
    price: 0,
    isNew: false,
    isSale: false,
    title: "",
    wheels: 0,
    year: new Date(2024, 2, 22),
    brand: "",
};
function moveGuard(vehicle) {
    return "drive" in vehicle;
}
function move(vehicle) {
    if (moveGuard(vehicle)) {
        return vehicle.drive();
    }
    return vehicle.sail();
}
function geometricFiguresGuard(figures) {
    return "radius" in figures;
}
function geometricFigures(figures) {
    if (geometricFiguresGuard(figures)) {
        return figures.radius;
    }
    return figures.side;
}
function vehiclesGuard(car) {
    return "engine" in car;
}
function vehicles(car) {
    if (vehiclesGuard(car)) {
        return car.engine.horsepower;
    }
    return car.battery.capacity;
}
// ---
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function dogOrCatGuard(pet) {
    return pet instanceof Dog;
}
function dogOrCat(pet) {
    if (dogOrCatGuard(pet)) {
        return pet.bark();
    }
    return pet.meow();
}
function parametersGuard(params) {
    switch (typeof params) {
        case "string":
            return params.length;
        case "number":
            return params * params;
        case "boolean":
            return params;
    }
}
function parameters(params) {
    return parametersGuard(params);
}
console.log(parameters("string"));
console.log(parameters(5));
console.log(parameters(true));
function typeofTrainGuard(type) {
    switch (typeof type) {
        case "string":
            return type.toUpperCase();
        case "number":
            return Math.abs(type);
        case "boolean":
            return !type;
        case "object": {
            if (type !== null) {
                return Object.keys(type).length;
            }
            else
                return;
        }
    }
}
function typeofTrain(type) {
    return typeofTrainGuard(type);
}
console.log(typeofTrain({ name: "dimon", age: 45, gender: true }));
//
class PersonTrain {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class CarTrain {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}
class HouseTrain {
    constructor(address, rooms) {
        this.address = address;
        this.rooms = rooms;
    }
}
const personTrain = new PersonTrain("Dimon", 45);
const carTrain = new CarTrain("BWM", 2024);
const houseTrain = new HouseTrain("Poltavw", 30);
function identifyObjectGuard(param) {
    if ("name" in param &&
        typeof param === "object" &&
        param !== null &&
        param instanceof PersonTrain) {
        return "People";
    }
    if ("model" in param &&
        typeof param === "object" &&
        param !== null &&
        param instanceof CarTrain) {
        return "Car";
    }
    if ("address" in param &&
        typeof param === "object" &&
        param !== null &&
        param instanceof HouseTrain) {
        return "Home";
    }
}
function identifyObject(param) {
    return identifyObjectGuard(param);
}
console.log(identifyObject(houseTrain));
const productAs = {
    id: 0,
    name: "sdfg",
    price: 0,
};
function checkProductPrice(product) {
    if (product.price === null)
        throw new Error("Product no has price");
}
function printProductPrice(product) {
    checkProductPrice(product);
    console.log(product.price);
}
printProductPrice(productAs);
const userAs = {
    name: "Dimon",
    age: 10,
};
function assertIsValidUser(user) {
    if (user.age <= 0 || !user.name || user.name.trim().length <= 0)
        throw new Error("Ivalid user");
}
function isValidUser(user) {
    assertIsValidUser(user);
    console.log(user.name.toUpperCase());
}
isValidUser(userAs);
const orderAs = {
    id: 1,
    totalPrice: 10,
    items: ["1", "2"],
};
function assertValidOrder(order) {
    if (order.totalPrice === null ||
        order.totalPrice <= 0 ||
        order.items.length <= 0)
        throw new Error("totalPrice or items is invalid");
}
function processOrder(order) {
    assertValidOrder(order);
    console.log("Order processed: $" + order.totalPrice);
}
processOrder(orderAs);
function isAnInternetOrder(order) {
    return !!order && "email" in order;
}
function isATelephoneOrder(order) {
    return !!order && "callerNumber" in order;
}
function makeOrder(order) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
function head(value) {
    if ((typeof value === "string" && value.trim().length) ||
        (typeof value === "object" && value.length > 0)) {
        return value[0];
    }
    throw new Error("Invalid data");
}
console.log(head([1]));
function calculate(a, b, c) {
    if (c === undefined) {
        return a + b;
    }
    switch (c) {
        case "multiply":
            return a * b;
        case "subtract":
            return a - b;
        case "divide":
            return a / b;
        default:
            throw new Error("Invalide Data");
    }
}
console.log(calculate(6, 3));
function format(data) {
    if (Array.isArray(data)) {
        return data.join(", ");
    }
    switch (typeof data) {
        case "string":
            return data.toUpperCase();
        case "number":
            return `$ ${data.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            })} `;
        default:
            throw new Error("Invalid data");
    }
}
console.log(format(2000));
//*-----------------------------Задание 7: Практика на дженерики---+++
function append(el, list) {
    return list.concat(el);
}
//*-----------------------------Задание 8: Практика на дженерики №2---+++
console.log("----------------------------");
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
//-------
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
//*-----------------------------Задание 9: Практика на дженерики №3---+++
function createMap(list) {
    return function (cb) {
        const result = [];
        for (let el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
const mapNums = createMap([1, 2, 3, 4]);
const resN = mapNums((data) => data + 1);
console.log(resN);
// *-----------------------------Задание на Infer от ИИ---+++
function example11(a, b) {
    console.log(a("test"), b);
}
function example12(a, b) {
    console.log(a(5), b);
}
let borderStyle = "solid red";
let borderStyle2 = "dashed white";
// *-----------------------------Задание 11: Практика по типизации класса---+++
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.height * this.width;
    }
    log() {
        console.log(`new Rectangle was create at ${new Date()}`);
    }
}
exports.Rectangle = Rectangle;
class Square1 extends Rectangle {
    constructor(width, color) {
        super(width, width);
        this.width = width;
        this.color = color;
    }
    paint(newColor) {
        this.color = newColor;
    }
}
// *-----------------------------Задание 12: Практика по типизации класса №2---+++
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature(Math.round((value - 32) / 1.8));
    }
}
exports.Temperature = Temperature;
