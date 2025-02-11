"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getTest(a) {
    return a;
}
function toArray(...args) {
    return args;
}
console.log(toArray(1, 2, 3, 4));
// function head(value: number[]): number;
// function head(value: boolean[]): boolean;
function head(value) {
    console.log(value);
}
head([true, false]);
const modelData = {
    title: "qwerty",
    value: 12,
};
// --------
const arrowGen = (a) => {
    return a;
};
// TODO--------------------------33. Добавление требований к дженерику---+++
function len(a) {
    return a.length;
}
console.log(len("qwerty"));
console.log(len([12, 5]));
console.log(len({ length: 5 }));
function intTest(data) {
    console.log(data);
}
intTest({ age: 45, name: "Cooo" });
// TODO--------------------------34. Оператор keyof---+++
console.log("--------------------------------------------");
const typ1 = "brand";
const tup = "0";
//---
const testObjKey = {
    id: 4,
    name: "Dimon",
    age: 45,
};
// --
class ClassMy {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
const testObj = "age";
// TODO--------------------------35. Сужение допустимых значений типа---+++
function prop(key, obj) {
    return obj[key];
}
const propObj = {
    name: "Qubiq",
    age: 4,
    gender: "male",
};
console.log(prop("name", propObj));
function request(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return response.json();
    });
}
const data3 = (request); //тип  Todo
// TODO--------------------------37. Область видимости типов дженерика---+++
function tuplePairCreator(dataOne) {
    return function (dataTwo) {
        return [dataOne, dataTwo];
    };
}
const tuplePair1 = tuplePairCreator(4);
console.log(tuplePair1("qwerty"));
