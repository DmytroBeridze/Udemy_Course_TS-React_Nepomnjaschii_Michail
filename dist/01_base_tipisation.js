"use strict";
// TODO---базовая типизация
//*------------------------- примитивные типы--+++
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFnc = userFnc;
// numbers
let x = 10;
// let y=123n
let z = NaN; //number
// strings
let str1 = "Hello workd";
let symb = Symbol("asdf");
// boolean
let o = true;
// nothing
let h = undefined;
let g = null;
// literal
const nl = 108; //nl: 108
const sl = "Hello"; //sl:"Hello"
// universal
let mm = 1;
mm = "str";
mm = [1, 2, 3, 4, 5];
// mm.toUpperCase();
// --++
let xx = 2;
if (typeof xx === "string") {
    xx.toUpperCase();
}
//*------------------------------- Базовая типизация функций--+++
function sum(a, b) {
    return a + b;
}
sum(2, 3);
const sumArrow = (a, b) => {
    return a + b;
};
function log(name, userID) {
    console.log("Hello" + " " + name + " " + "userID" + " " + userID || "anonyme");
}
log("Dimon", "123");
function crash() {
    throw new Error("crash");
}
function avarage(...params) {
    params.reduce((acc, curr) => {
        let res = acc + curr;
        return res / params.length;
    }, 0);
}
const car = {
    wheels: 4,
    brand: "BMW",
    type: "Sedan",
    isNew: false,
};
car.brand = "Audi";
const car2 = {
    wheels: 0,
    brand: "Some",
    type: "any",
};
car2.go = true;
//* --------------------------Объекты как параметры функции---+++
function printPoint(point) {
    console.log(`Coordinate of the point is x:${point.x} and y:${point.y} `);
}
const obj1 = {
    x: "10",
    y: "20",
};
printPoint(obj1);
function printName(user) {
    console.log("Hello", "user firsname:", user.firstName.toUpperCase());
    console.log("Hello", "user lastname:", user.lastName.toUpperCase());
}
printName({ firstName: "Dimon", lastName: "Ber" });
//* -------------------------- Типизация массивов---+++
const nunbers = [1, 2, 3, 4, 5];
const strs = [];
const strs2 = [];
// --
const carrs = [];
carrs.push({ whells: 4, barand: "some" });
// --
const ArrArrs = [
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
];
//* --------------------------Кортежи (tuples)---+++
const tuple = [
    ["key", "value"],
    ["key2", "value2"],
];
// --
const data = [1, "string", true];
// --
const doc = [];
doc.push([12, "Dimon", true, new Date(2025, 5, 1)]);
const xS = "ok";
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    console.log(id);
}
function welcome(persone) {
    if (Array.isArray(persone)) {
        console.log(["Name", "Lastname"]);
    }
    else
        console.log("Only Name");
}
//* -------------------------- Enum---+++
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
const myShape = ShapeKind.Circle;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ERROR"] = 500] = "ERROR";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["NOT_AUYH"] = 403] = "NOT_AUYH";
})(StatusCode || (StatusCode = {}));
// -------
var EUserLevel;
(function (EUserLevel) {
    EUserLevel["JUNIOR"] = "junior";
    EUserLevel["MIDDLE"] = "middle";
    EUserLevel["SENIOR"] = "senior";
})(EUserLevel || (EUserLevel = {}));
const userEn = {
    level: EUserLevel.JUNIOR,
    skills: ["HTML", "JS", "CSS"],
    age: 0,
};
function userFnc(user) {
    if (user.level === EUserLevel.JUNIOR) {
        user.level = EUserLevel.MIDDLE;
    }
    if (user.level === EUserLevel.MIDDLE) {
        user.level = EUserLevel.SENIOR;
    }
    return user;
}
console.log("!!!!", userFnc(userEn));
