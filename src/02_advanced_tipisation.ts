// *---------------------------------Подробнее об интерфейсах---+++
interface User {
  readonly email: string;
  readonly login: string;
  password: string;
}

interface User {
  isOnline?: boolean;
}

const user1: User = {
  email: "",
  login: "",
  password: "",
  isOnline: true,
};
// --------
interface Person {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
}

interface Employee extends Person, User {
  contractStart: Date;
  phone: string; // теперь это обязательное поле
  code(id: string): void;
  say: (data: number) => void;
}

const user2: Employee = {
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
// *---------------------------------20. Подробнее об алиасах---+++
type Union1 = "a" | "b" | "c" | "d";
type Union2 = "a" | "e" | "c" | "i";
type Union3 = Union1 | Union2; //all variants
// в случае с юнионами отсекает несовпадающие типы
type Union4 = Union1 & Union2; //a|c

// в случае с объектами объединяет типы
type Union5 = { a: string; b: string } & { d: number };
const un: Union5 = { a: "fdfdf", b: "hdhdh", d: 4 };
// ----

type TUser1 = {
  name: string;
  lastName: string;
};

interface IUser1 {
  age: number;
  data: Date;
}

type TUser2 = {
  mail: string;
} & TUser1 &
  IUser1;

const tuser2: TUser2 = {
  age: 45,
  data: new Date(2025, 5, 2),
  lastName: "Ber",
  mail: "asdsdf@hf",
  name: "Dimon",
};

// TODO---------------------------------22. Сужение типов---+++

// 1
function example1(x?: number | string) {
  if (typeof x === "string") {
    return x.toUpperCase();
  } else if (typeof x === "number") {
    return x.toFixed(2);
  } else if (x === undefined) {
    return "No value";
  } else return "x is never";
}
// 2
function example2(str: string | string[] | null) {
  if (str && typeof str === "object") {
    return str.filter((elem) => elem);
  } else if (typeof str === "string") {
    return str.toUpperCase();
  } else return null;
}
// 3
function example3(x: number[] | Date) {
  if (x instanceof Date) {
    return x.getDate();
  } else x.find((elem) => elem);
}
// 4
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function example4(anim: Fish | Bird) {
  if ("swim" in anim) {
    return anim.swim();
  }
  return anim.fly();
}

const ff: Fish = {
  swim: function (): void {
    console.log("Swim");
  },
};
const bb: Bird = {
  fly: function (): void {
    console.log("Fly");
  },
};
example4(bb);
// TODO---------------------------------23.Type Guards---+++

console.log("--------------------log");

type Fish2 = { swim: () => void };
type Bird2 = { fly: () => void };

function animalGuard(func: Fish2 | Bird2): func is Fish2 {
  // return (func as Fish2).swim !== undefined;
  return "swim" in func;
}

function animal2(fnc: Fish2 | Bird2) {
  if (animalGuard(fnc)) {
    return fnc.swim();
  }
  return fnc.fly();
}

// TODO---------------------------------24. Asserts---+++
type UserAs = {
  name: string;
  displayName: string | null;
};

function assertDisplayName(
  user: UserAs
): asserts user is UserAs & { displayName: string } {
  if (!user.displayName) throw new Error("User has not displayName field");
}

function logUserByDisplayName(user: UserAs) {
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

function myClickHandler(this: HTMLButtonElement) {
  this.disabled = true;
}

// TODO---------------------------------26. Перегрузка функций---+++
function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}
add(1, 2);
// --

type AsyncCb = (res: number) => number;

function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: AsyncCb): number;

function asyncSum(a: number, b: number, cb?: AsyncCb): any {
  const res = a + b;
  if (cb) return cb(res);

  return Promise.resolve(res);
}
// -------------------

// TODO---------------------------------27. Рекурсивные типы---+++

type NestedNumbers = number | NestedNumbers[];
const nestedNumbers: NestedNumbers = [1, 2, [3, 4, [5, 6, 7]]];

// ---

type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [key: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

// TODO---------------------------------28. Оператор !---+++
let word: string | null = null;
let num = 10;
if (num > 5) {
  word = "data";
}
// говорит отом, что в переаенной сто процентов есть значение, а не null или undefined
console.log(word!.toLowerCase());

// ---------
export function prntSome(data?: string) {
  const res: string = data!;
}

// --------
