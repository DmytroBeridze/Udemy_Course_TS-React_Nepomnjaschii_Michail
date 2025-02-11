"use strict";
// TODO-----------------------------40. Оператор typeof---+++
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPcCatalog = printPcCatalog;
let str = "Hello word";
// -----
function typeofFunc(...args) {
    const res = args.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    return res;
}
const newTypeofFunc = (...args) => {
    return Math.max(...args);
};
const o1 = {
    d: "ggdgdg",
};
// TODO------------------------------43. Оператор infer---+++
function fromPair(pair) {
    const [key, value] = pair;
    return {
        [key]: value,
    };
}
const myPair = ["key", "data"];
fromPair(myPair);
// ---------------------
function fromTest(data) {
    return "4";
}
const brandRecord = {
    apple: {
        country: "Usa",
        name: "Apple",
        createdAt: new Date(),
    },
};
// ---
function printPcCatalog(catalog) {
    const { apple, huawei, hp, lenovo, microsoft } = catalog;
    console.log(catalog.apple);
}
const namesRecUn = {
    lorem: "1",
    ipsum: "1",
    dolor: "3",
    // sit:"hjhjhjh"
};
const recMain = {
    age: 7,
    price: 20,
    year: 1237,
};
const simpleTodoPick = {
    id: "some id",
    title: "some title",
};
const simpleTodoPick2 = {
    id: "4",
    title: "Some title",
};
function updateTodo(original, newList) {
    return Object.assign(Object.assign({}, original), newList);
}
// --
const todoRead = {
    id: "4",
    title: "some",
    completed: false,
    createAd: new Date(),
};
const upd = updateTodo(todoRead, { id: "25" });
console.log(upd);
// TODO------------------------------48. Утилиты Parameters, ConstructorParameters---+++
// ReturnType
function f1(arg) {
    return arg.a + arg.b;
}
// CounstructorParameters
class CarsParam {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
}
// ---------
const somArrTest = ["lorem", "ipsum", "dolor", "sit", "ammet"];
// ----
