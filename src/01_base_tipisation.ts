// TODO---базовая типизация
//*------------------------- примитивные типы--+++

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
let h: undefined = undefined;
let g: null = null;

// literal
const nl = 108; //nl: 108
const sl = "Hello"; //sl:"Hello"

// universal
let mm: any = 1;
mm = "str";
mm = [1, 2, 3, 4, 5];
// mm.toUpperCase();
// --++
let xx: unknown = 2;
if (typeof xx === "string") {
  xx.toUpperCase();
}

//*------------------------------- Базовая типизация функций--+++

function sum(a: number, b: number): number {
  return a + b;
}
sum(2, 3);

const sumArrow = (a: number, b: number): number => {
  return a + b;
};

function log(name: string, userID?: string): void {
  console.log(
    "Hello" + " " + name + " " + "userID" + " " + userID || "anonyme"
  );
}

log("Dimon", "123");

function crash(): never {
  throw new Error("crash");
}

function avarage(...params: number[]) {
  params.reduce((acc, curr) => {
    let res = acc + curr;
    return res / params.length;
  }, 0);
}

//*------------------------------- Базовая типизация объектов--+++

interface ICar {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;
  [key: string]: any;
}

const car: ICar = {
  wheels: 4,
  brand: "BMW",
  type: "Sedan",
  isNew: false,
};
car.brand = "Audi";

const car2: ICar = {
  wheels: 0,
  brand: "Some",
  type: "any",
};
car2.go = true;

//* --------------------------Объекты как параметры функции---+++

function printPoint(point: { x: string; y: string }): void {
  console.log(`Coordinate of the point is x:${point.x} and y:${point.y} `);
}

const obj1 = {
  x: "10",
  y: "20",
};
printPoint(obj1);

function printName(user: { firstName: string; lastName: string }): void {
  console.log("Hello", "user firsname:", user.firstName.toUpperCase());
  console.log("Hello", "user lastname:", user.lastName.toUpperCase());
}
printName({ firstName: "Dimon", lastName: "Ber" });

//* -------------------------- Типизация массивов---+++

const nunbers = [1, 2, 3, 4, 5];
const strs: string[] = [];
const strs2: Array<string> = [];

interface ICarr {
  whells: number;
  barand: string;
}
// --
const carrs: ICarr[] = [];
carrs.push({ whells: 4, barand: "some" });
// --
const ArrArrs: number[][] = [
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
];

//* --------------------------Кортежи (tuples)---+++
const tuple: [string, string][] = [
  ["key", "value"],
  ["key2", "value2"],
];
// --
const data: [number, string, boolean] = [1, "string", true];
// --
const doc: [number, string, boolean, Date][] = [];
doc.push([12, "Dimon", true, new Date(2025, 5, 1)]);

//* --------------------------Алиасы (type)---+++
type MyBoolean = false | true;

type Pair = [string, string];
type Pares = Pair[];

type TCar = {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;
  [key: string]: any;
};

//* -------------------------- Union типы---+++

type Status = "ok" | "loading" | "error";
const xS: Status = "ok";

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
  console.log(id);
}

function welcome(persone: [string, string] | string) {
  if (Array.isArray(persone)) {
    console.log(["Name", "Lastname"]);
  } else console.log("Only Name");
}

//* -------------------------- Enum---+++
enum ShapeKind {
  Circle,
  Square,
}

const myShape = ShapeKind.Circle;

enum StatusCode {
  ERROR = 500,
  NOT_FOUND = 404,
  NOT_AUYH = 403,
}
// -------
enum EUserLevel {
  JUNIOR = "junior",
  MIDDLE = "middle",
  SENIOR = "senior",
}

interface UserEn {
  level: EUserLevel;
  skills: string[];
  age: number;
}

const userEn: UserEn = {
  level: EUserLevel.JUNIOR,
  skills: ["HTML", "JS", "CSS"],
  age: 0,
};

export function userFnc(user: { level: EUserLevel }) {
  if (user.level === EUserLevel.JUNIOR) {
    user.level = EUserLevel.MIDDLE;
  }
  if (user.level === EUserLevel.MIDDLE) {
    user.level = EUserLevel.SENIOR;
  }
  return user;
}

console.log("!!!!", userFnc(userEn));
