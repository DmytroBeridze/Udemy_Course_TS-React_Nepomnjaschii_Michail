// TODO-----------------------------40. Оператор typeof---+++

let str = "Hello word";
type x = typeof str;

// -----
function typeofFunc(...args: number[]) {
  const res = args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return res;
}

type TypeofFunc = typeof typeofFunc;
const newTypeofFunc: TypeofFunc = (...args) => {
  return Math.max(...args);
};

//TODO -------------------------------ReturnType

type fncReturn = ReturnType<typeof typeofFunc>;

// TODO-----------------------------41.Conditional type
interface StringRecord {
  [key: string]: string;
}

interface DateRecord {
  [key: string]: Date;
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord;

type Obj1 = MyRecord<string>;
type Obj2 = MyRecord<number>;
const o1: Obj1 = {
  d: "ggdgdg",
};

// TODO------------------------------42. Еще раз про extends---+++
type T0 = typeof NaN extends number ? true : false; //  true

type T1 = number extends any ? true : false; // true

type T2 = string extends "a" | "b" | "c" ? true : false; //false

type T3 = { getDay(): number } extends Date ? true : false; //false

type T4 = number | string extends string ? true : false; //false

// TODO------------------------------43. Оператор infer---+++
function fromPair(pair: [string, string]) {
  const [key, value] = pair;
  return {
    [key]: value,
  };
}

type FirstArg<T> = T extends (first: infer First, ...args: any[]) => any
  ? First
  : never;

const myPair: FirstArg<typeof fromPair> = ["key", "data"];

fromPair(myPair);
// ---------------------

function fromTest(data: boolean): string {
  return "4";
}

type FromTest<T> = T extends (a: infer A) => any ? A : never;
type FromT1 = FromTest<typeof fromTest>;

// TODO------------------------------44. Маппинг типов---+++
type PcBrand = {
  name: string;
  country: string;
  createdAt: Date;
};

type WellKnownBrands = "apple" | "lenovo" | "hp" | "microsoft" | "huawei";
type MyPcRecord = {
  [BrandKey in WellKnownBrands]?: PcBrand;
};
const brandRecord: MyPcRecord = {
  apple: {
    country: "Usa",
    name: "Apple",
    createdAt: new Date(),
  },
};
// ---
export function printPcCatalog(catalog: MyPcRecord) {
  const { apple, huawei, hp, lenovo, microsoft } = catalog;
  console.log(catalog.apple);
}

// TODO------------------------------45. Утилиты Extract, Exclude, NonNullable---+++
// работают только с type, не работают с объектными структурами
// Exclude
type T01 = Exclude<"a" | "b" | "c" | "d", "a">;
type T02 = Exclude<"a" | "b" | "c", "a" | "y">;
type T03 = Exclude<"a" | ((data: any) => void), Function>;
// --
type Statuses = "success" | "clientError" | "serverError" | 200 | 401 | 504;
type NumericStatus = Exclude<Statuses, string>;

// Extract
type T04 = Extract<"a" | "b" | "c" | "d", "a" | "b">;
type T05 = Extract<boolean | number | ((a: string) => void), Function>;

type PersonEx = {
  name: string;
  lastName: string;
  age: number;
  country: string;
  education: string;
  gender: string;
};

type PersonNamesEx = Extract<keyof PersonEx, "name" | "lastName">;

// NonNullable
type T06 = NonNullable<number | string | undefined>;

// TODO------------------------------46. Утилиты Record, Pick, Omit---+++

// Record
type NamesRec = Record<string, string>; //обозначает какого типа будут ключ и значение
const namesRecUn: NamesRec = {
  lorem: "1",
  ipsum: "1",
  dolor: "3",
  // sit:"hjhjhjh"
};

type RecUn = "price" | "year" | "age";
type RecMain = Record<RecUn, number>;

const recMain: RecMain = {
  age: 7,
  price: 20,
  year: 1237,
};

// работают с объектными структурами
// Pick

interface TodoPick {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createAd: Date;
}

type SimpleTodoPick = Pick<TodoPick, "id" | "title">;
const simpleTodoPick: SimpleTodoPick = {
  id: "some id",
  title: "some title",
};

// Omit
type SimpleTodoPick2 = Omit<TodoPick, "completed" | "createAd" | "description">;
const simpleTodoPick2: SimpleTodoPick2 = {
  id: "4",
  title: "Some title",
};

// TODO------------------------------47. Утилиты ReadOnly, Required, Partial---+++
interface TodoRead {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createAd: Date;
}

type TodoReadOnly = Readonly<TodoRead>; //все поля становятся доступными только для чтения
type TodoPartial = Partial<TodoRead>; //все поля становятся необязательныти
type TodoRequired = Required<TodoRead>; //все поля становятся обязательныти

function updateTodo(original: TodoRead, newList: TodoPartial) {
  return { ...original, ...newList };
}

// --
const todoRead: TodoRead = {
  id: "4",
  title: "some",
  completed: false,
  createAd: new Date(),
};

const upd = updateTodo(todoRead, { id: "25" });
console.log(upd);

// TODO------------------------------48. Утилиты Parameters, ConstructorParameters---+++
// ReturnType
function f1(arg: { a: string; b: number }) {
  return arg.a + arg.b;
}
type f1ReturnType = ReturnType<typeof f1>;

// Parameters
type f1Parameters = Parameters<typeof f1>;

// CounstructorParameters
class CarsParam {
  constructor(public name: string, public brand: string) {}
}
type CarsParamType = ConstructorParameters<typeof CarsParam>;

// TODO------------------------------49. Доступ по индексу---+++
interface DataModel {
  id: number;
  title: string;
  elements: {
    header: {
      title: string;
      desc: string;
      links: string;
    };
    footer: {
      desc: string;
      links: string;
    };
  };
}

type Dm = DataModel["elements"]["footer"];

// ---------
type someTuple = [number, string, boolean, ...string[]];
type someT = someTuple["0"];

// ---------
const somArrTest = ["lorem", "ipsum", "dolor", "sit", "ammet"] as const;
type somArrT = (typeof somArrTest)[number];

// TODO------------------------------50. Шаблонные литералы---+++
type Size = "small" | "medium" | "large";
type SizeLabel = `size-${Size}`;

// ---------
type Side = "top" | "right" | "bottom" | "left";
type Margin = `margin-${Side}`;

// ---------
type Direction = "down" | "left" | "right" | "up";
type Position = "top" | "bottom";
type Entry = "in" | "out";

type FadeClassNames = `fade-${Entry}${Capitalize<Direction | Position>}`;

// ---------
interface CarLit {
  brand: string;
  model?: string;
  year?: number;
}

type CarFactory = {
  [K in keyof CarLit as `set${Capitalize<K>}`]: (
    car: CarLit,
    value: CarLit[K]
  ) => void;
};

// ----
