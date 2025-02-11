// TODO--------------------------32. Базовые примеры---+++
type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;

function getTest<T>(a: T): T {
  return a;
}

function toArray<T>(...args: T[]): T[] {
  return args;
}

console.log(toArray(1, 2, 3, 4));

// ---------------
function head(value: string): string;
function head<T>(value: T[]): T;
// function head(value: number[]): number;
// function head(value: boolean[]): boolean;
function head(value: any): any {
  console.log(value);
}

head([true, false]);
// -----------

interface ModelData<T> {
  title: string;
  value: T;
}
const modelData: ModelData<number> = {
  title: "qwerty",
  value: 12,
};
// --------
const arrowGen = <T>(a: T[]): T[] => {
  return a;
};

// TODO--------------------------33. Добавление требований к дженерику---+++

function len<T extends { length: number }>(a: T): number {
  return a.length;
}
console.log(len("qwerty"));
console.log(len([12, 5]));
console.log(len({ length: 5 }));
// --
interface Int {
  name: string;
  age: number;
}

function intTest<T extends Int>(data: T) {
  console.log(data);
}
intTest({ age: 45, name: "Cooo" });
// TODO--------------------------34. Оператор keyof---+++
console.log("--------------------------------------------");

// сщздает юнион значений из ключей
interface Pc {
  brand: string;
  year: string;
}

type Typ1 = keyof Pc;
const typ1: Typ1 = "brand";

// -
type Tup = keyof ["lorem", "ipsum"];
const tup: Tup = "0";

//---

const testObjKey = {
  id: 4,
  name: "Dimon",
  age: 45,
};
type TestObjKey = keyof typeof testObjKey;

// --
class ClassMy {
  name: string;
  age: string;
  constructor(name: string, age: string) {
    this.age = age;
    this.name = name;
  }
}
type TestObj = keyof ClassMy;
const testObj: TestObj = "age";

// TODO--------------------------35. Сужение допустимых значений типа---+++
function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key];
}
const propObj = {
  name: "Qubiq",
  age: 4,
  gender: "male",
};

console.log(prop("name", propObj));

// ----

// TODO--------------------------36. Значения по умолчанию---+++
type Req = {
  [key: string]: unknown;
};

async function request<T = Req>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

// const data1 = request(""); //по умолчанию тип Req
// const data2 = request<string>(""); //тип указан как string

type Todo = {
  id: string;
  compleated: boolean;
  title: string;
};
const data3 = request<Todo>; //тип  Todo

// TODO--------------------------37. Область видимости типов дженерика---+++

function tuplePairCreator<T>(dataOne: T) {
  return function <U>(dataTwo: U): [T, U] {
    return [dataOne, dataTwo];
  };
}
const tuplePair1 = tuplePairCreator(4);
console.log(tuplePair1("qwerty"));
