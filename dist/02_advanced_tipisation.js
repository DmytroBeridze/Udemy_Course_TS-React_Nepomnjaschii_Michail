"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prntSome = prntSome;
const user1 = {
    email: "",
    login: "",
    password: "",
    isOnline: true,
};
const user2 = {
    contractStart: new Date(2025, 5, 2),
    firstName: "",
    lastName: "",
    email: "",
    login: "",
    password: "",
    phone: "",
    code(id) {
        console.log(id);
    },
    say(data) {
        console.log(data);
    },
};
const un = { a: "fdfdf", b: "hdhdh", d: 4 };
const tuser2 = {
    age: 45,
    data: new Date(2025, 5, 2),
    lastName: "Ber",
    mail: "asdsdf@hf",
    name: "Dimon",
};
// TODO---------------------------------22. Сужение типов---+++
// 1
function example1(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    else if (typeof x === "number") {
        return x.toFixed(2);
    }
    else if (x === undefined) {
        return "No value";
    }
    else
        return "x is never";
}
// 2
function example2(str) {
    if (str && typeof str === "object") {
        return str.filter((elem) => elem);
    }
    else if (typeof str === "string") {
        return str.toUpperCase();
    }
    else
        return null;
}
// 3
function example3(x) {
    if (x instanceof Date) {
        return x.getDate();
    }
    else
        x.find((elem) => elem);
}
function example4(anim) {
    if ("swim" in anim) {
        return anim.swim();
    }
    return anim.fly();
}
const ff = {
    swim: function () {
        console.log("Swim");
    },
};
const bb = {
    fly: function () {
        console.log("Fly");
    },
};
example4(bb);
// TODO---------------------------------23.Type Guards---+++
console.log("--------------------log");
function animalGuard(func) {
    // return (func as Fish2).swim !== undefined;
    return "swim" in func;
}
function animal2(fnc) {
    if (animalGuard(fnc)) {
        return fnc.swim();
    }
    return fnc.fly();
}
function assertDisplayName(user) {
    if (!user.displayName)
        throw new Error("User has not displayName field");
}
function logUserByDisplayName(user) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase());
}
// TODO---------------------------------25. Типизация this---+++
const us = {
    id: 123,
    name: "Dimon",
    admin: false,
    changeDmin: function () {
        this.admin = true;
    },
};
function myClickHandler() {
    this.disabled = true;
}
function add(a, b) {
    return a + b;
}
add(1, 2);
function asyncSum(a, b, cb) {
    const res = a + b;
    if (cb)
        return cb(res);
    return Promise.resolve(res);
}
const nestedNumbers = [1, 2, [3, 4, [5, 6, 7]]];
// TODO---------------------------------28. Оператор !---+++
let word = null;
let num = 10;
if (num > 5) {
    word = "data";
}
// говорит отом, что в переаенной сто процентов есть значение, а не null или undefined
console.log(word.toLowerCase());
// ---------
function prntSome(data) {
    const res = data;
}
// --------
