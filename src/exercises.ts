// *------------------------------Задание 1: Базовая типизация функций---+++

function slice(str: string, start: number, end?: number): string {
  let newStr = "";

  let lastIndex;

  if (end) {
    lastIndex = end > str.length ? str.length : end;
  } else {
    lastIndex = str.length;
  }

  for (let i = start; i < lastIndex; i++) {
    newStr += str[i];
  }

  return newStr;
}

// *------------------------------Задание 2: Задание: Валидация пользователя---+++
/*
Создайте интерфейсы User и Admin.

User должен содержать следующие ключи:

    login, email, password, isOnline, lastVisited

Admin содержит все те же ключи, плюс ключ role.

Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.

Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.

*/

interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}
interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

function login(user: { login: string; password: string }): string | boolean {
  return user.login.trim() && user.password.trim() ? `Hello user` : false;
}

// *------------------------------Задание 3: Практика на union---+++
/*

Дан union-тип Level с уровнями позиция для разработчиков. Он же назначен для интерфейса Developer.

Необходимо создать функцию gradeDeveloper, которая будет принимать объект пользователя с ключом level и новый уровень. В теле функции для полученного объекта должен назначаться следующий уровень.

type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string,
  skills: string[],
  level: Level, 
  }
  
  create a function that change level of incoming developer
  function gradeDeveloper() {
    }
    */

type Level = "junior" | "middle" | "senior";

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}
const UserDev: Developer = {
  login: "user",
  skills: ["Lorem", "Ipsum", "Dolor"],
  level: "junior",
};

export function gradeDeveloper(user: { level: Level }, newLevel: Level) {
  user.level = newLevel;
  console.log(user);
}

gradeDeveloper(UserDev, "senior");

// *-----------------------------Задание 4: Практика на наследование типов---+++

type TProduct = {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
};
type TVehicle = {
  wheels: number;
  year: Date;
  brand: string;
};
type TCar = {
  type: string;
  model: string;
} & TProduct &
  TVehicle;

const carT: TCar = {
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

interface IProduct {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
}
interface IVehicle {
  wheels: number;
  year: Date;
  brand: string;
}
interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}

const catI: ICar = {
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

// *-----------------------------Задание на Type Guards от ИИ---+++

type Car = { drive: () => void };
type Boat = { sail: () => void };

function moveGuard(vehicle: Car | Boat): vehicle is Car {
  return "drive" in vehicle;
}

function move(vehicle: Car | Boat) {
  if (moveGuard(vehicle)) {
    return vehicle.drive();
  }
  return vehicle.sail();
}
// ---

type Circle = { radius: number };
type Square = { side: number };

function geometricFiguresGuard(figures: Circle | Square): figures is Circle {
  return "radius" in figures;
}

function geometricFigures(figures: Circle | Square) {
  if (geometricFiguresGuard(figures)) {
    return figures.radius;
  }
  return figures.side;
}
// --
type EngineCar = { engine: { horsepower: number } };
type ElectricCar = { battery: { capacity: number } };

function vehiclesGuard(car: EngineCar | ElectricCar): car is EngineCar {
  return "engine" in car;
}
function vehicles(car: EngineCar | ElectricCar) {
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

function dogOrCatGuard(pet: Dog | Cat): pet is Dog {
  return pet instanceof Dog;
}

function dogOrCat(pet: Dog | Cat) {
  if (dogOrCatGuard(pet)) {
    return pet.bark();
  }
  return pet.meow();
}
// -----

type TParameters = string | number | boolean;

function parametersGuard(params: TParameters) {
  switch (typeof params) {
    case "string":
      return params.length;
    case "number":
      return params * params;
    case "boolean":
      return params;
  }
}
function parameters(params: TParameters) {
  return parametersGuard(params);
}

console.log(parameters("string"));
console.log(parameters(5));
console.log(parameters(true));

// ---

type TParameters2 = string | number | boolean | object;
function typeofTrainGuard(type: TParameters2) {
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
      } else return;
    }
  }
}
function typeofTrain(type: TParameters2) {
  return typeofTrainGuard(type);
}
console.log(typeofTrain({ name: "dimon", age: 45, gender: true }));

// -
interface IPersonTrain {
  name: string;
  age: number;
}
interface ICarTrain {
  model: string;
  year: number;
}
interface IHouseTrain {
  address: string;
  rooms: number;
}
//
class PersonTrain implements IPersonTrain {
  constructor(public name: string, public age: number) {}
}
class CarTrain implements ICarTrain {
  constructor(public model: string, public year: number) {}
}

class HouseTrain implements IHouseTrain {
  constructor(public address: string, public rooms: number) {}
}

const personTrain = new PersonTrain("Dimon", 45);
const carTrain = new CarTrain("BWM", 2024);
const houseTrain = new HouseTrain("Poltavw", 30);

function identifyObjectGuard(param: IPersonTrain | ICarTrain | IHouseTrain) {
  if (
    "name" in param &&
    typeof param === "object" &&
    param !== null &&
    param instanceof PersonTrain
  ) {
    return "People";
  }
  if (
    "model" in param &&
    typeof param === "object" &&
    param !== null &&
    param instanceof CarTrain
  ) {
    return "Car";
  }
  if (
    "address" in param &&
    typeof param === "object" &&
    param !== null &&
    param instanceof HouseTrain
  ) {
    return "Home";
  }
}
function identifyObject(param: IPersonTrain | ICarTrain | IHouseTrain) {
  return identifyObjectGuard(param);
}

console.log(identifyObject(houseTrain));

// *-----------------------------Задание на Asserts от ИИ---+++
interface ProductAs {
  id: number;
  name: string;
  price: number | null;
}

const productAs: ProductAs = {
  id: 0,
  name: "sdfg",
  price: 0,
};

function checkProductPrice(
  product: ProductAs
): asserts product is { id: number; name: string; price: number } {
  if (product.price === null) throw new Error("Product no has price");
}

function printProductPrice(product: ProductAs) {
  checkProductPrice(product);
  console.log(product.price);
}

printProductPrice(productAs);
// ----------------
interface UserAs {
  name: string | null;
  age: number;
}

interface ValidUserAs {
  name: string;
  age: number;
}

const userAs: UserAs = {
  name: "Dimon",
  age: 10,
};

function assertIsValidUser(user: UserAs): asserts user is ValidUserAs {
  if (user.age <= 0 || !user.name || user.name.trim().length <= 0)
    throw new Error("Ivalid user");
}

function isValidUser(user: UserAs) {
  assertIsValidUser(user);
  console.log(user.name.toUpperCase());
}

isValidUser(userAs);

interface OrderAs {
  id: number;
  totalPrice: number | null;
  items: string[];
}

const orderAs: OrderAs = {
  id: 1,
  totalPrice: 10,
  items: ["1", "2"],
};

function assertValidOrder(order: OrderAs): asserts order is OrderAs {
  if (
    order.totalPrice === null ||
    order.totalPrice <= 0 ||
    order.items.length <= 0
  )
    throw new Error("totalPrice or items is invalid");
}

function processOrder(order: OrderAs) {
  assertValidOrder(order);
  console.log("Order processed: $" + order.totalPrice);
}

processOrder(orderAs);

//*-----------------------------Задание 5: Практика на Type Guards---+++

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

interface Order {
  address: string;
}
interface TelephoneOrder extends Order {
  callerNumber: string;
}
interface InternetOrder extends Order {
  email: string;
}

function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
  return !!order && "email" in order;
}

function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
  return !!order && "callerNumber" in order;
}

function makeOrder(order: PossibleOrders) {
  if (isAnInternetOrder(order)) {
    console.log(order.email);
  } else if (isATelephoneOrder(order)) {
    console.log(order.callerNumber);
  }
}

//*-----------------------------Задание 6: Практика на перегрузку функций---+++
function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;

function head(value: any): any {
  if (
    (typeof value === "string" && value.trim().length) ||
    (typeof value === "object" && value.length > 0)
  ) {
    return value[0];
  }

  throw new Error("Invalid data");
}

console.log(head([1]));

// ----------------задание от ИИ
function calculate(a: number, b: number): number;
function calculate(a: number, b: number, c: string): number;

function calculate(a: number, b: number, c?: string): number {
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

// -----------------
function format(data: string): string;
function format(data: number): string;
function format(data: string[]): string;

function format(data: any): any {
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

function append<T>(el: T, list: T[]) {
  return list.concat(el);
}

//*-----------------------------Задание 8: Практика на дженерики №2---+++
console.log("----------------------------");

export function keys<T extends { [key: string]: any }>(obj: T): string[] {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}
//-------
export function values<T extends object>(obj: T): T[keyof T][] {
  const currentValues = [];

  for (let key in obj) {
    currentValues.push(obj[key]);
  }

  return currentValues;
}

//*-----------------------------Задание 9: Практика на дженерики №3---+++

export function createMap<T>(list: T[]) {
  return function <U>(cb: (data: T) => any): U[] {
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

function example11(a: (x: string) => number, b: string): void {
  console.log(a("test"), b);
}

function example12(a: (x: number) => string, b: boolean): void {
  console.log(a(5), b);
}

type ReturnTypeOfFirstParameter<T> = T extends (
  a: (...params: any[]) => infer A,
  ...params: any[]
) => any
  ? A extends (...params: any[]) => infer R
    ? R
    : never
  : never;

// *-----------------------------Задание 10: Практика на создание шаблонных---+++

type Style = "none" | "dotted" | "dashed" | "solid";
type Color = "Red" | "Green" | "Blue" | "Black" | "White";

type BorderStyle = `${Style} ${Lowercase<Color>}`;

let borderStyle: BorderStyle = "solid red";
let borderStyle2: BorderStyle = "dashed white";

// *-----------------------------Задание 11: Практика по типизации класса---+++

export class Rectangle {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.height * this.width;
  }

  protected log() {
    console.log(`new Rectangle was create at ${new Date()}`);
  }
}

class Square1 extends Rectangle {
  constructor(public width: number, public color: string) {
    super(width, width);
  }

  paint(newColor: string) {
    this.color = newColor;
  }
}

// *-----------------------------Задание 12: Практика по типизации класса №2---+++
export class Temperature {
  constructor(public celsius: number) {}

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value: number): Temperature {
    return new Temperature(Math.round((value - 32) / 1.8));
  }
}
