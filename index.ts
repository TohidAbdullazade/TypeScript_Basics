// Basic types
let str: string = "Test";
let num: number = 10;
let isBoolean: boolean = true;
let strArr: string[] = ["1", "2", "3"];
let strArr2: Array<string> = ["1", "2", "3"];
let numArr: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 3];

type PersonTypes = {
  name: string;
  readonly age?: number | string;
  // ? ==> optional yeni field olsa da olar olmasa da
  // readonly ==> bunun deyerin deyismek olmaz
};

let person: PersonTypes = {
  name: "Tohid",
  // age: 22,
};

// any and unknow;
let not: any = "test1";
let numbers = 10;
numbers = not; // any give not error

let unknowType: unknown;
//number = unknowType // give an error

// Union Types
let val: string | number = 10; // "10";

// Literal Types
let customType: "customType1" | "customType2" | 5 = 5;

// Typle
let customArr: [number, number, number]; // ===> Array<number,number,number>   ;
customArr = [1, 2, 3];

// Generic Types
type ArrTypes<T> = {
  name: T;
};

let arr: ArrTypes<string>[] = [
  {
    name: "Tohid",
  },
];
let arr2: ArrTypes<number>[] = [
  {
    name: 10,
  },
];
let arr3: ArrTypes<boolean>[] = [
  {
    name: true,
  },
];
// Generic Types
interface Types<T> {
  name: T;
}

let obj: Types<string> = {
  name: "a",
};
let obj_2: Types<number> = {
  name: 10,
};
let ob_3j: Types<boolean> = {
  name: false,
};

// functions
const calc = (x: number, y: number): number => {
  return x + y;
};
let sum = calc;
console.log(sum(1, 2)); // output = 3

const calc2 = (x: number, y: number): void => {
  // return x + y; // void yenu hec ne return etmir sadece oxutdura bilersen
};
let sum2 = calc2;
console.log(sum2(1, 2)); // output = 3

// Function  with return;
interface FunctionParametrTypes {
  x: number;
  y: number;
  z: number;
}

const calcSum = ({ x, y, z }: FunctionParametrTypes): number => {
  return x + y + z;
};
//let cvb: (params: FunctionParametrTypes) => number = calcSum;

let result = calcSum({ x: 1, y: 2, z: 3 });
console.log(result); // Output: 6

// keyof

type Test = {
  a: string;
  b: string;
  c: string;
};

type Test2 = keyof Test; // ==> "a" | "b" | "c"

// extending Types this is accessable only with interfaces

interface ParentType {
  name?: string;
  age?: number;
  skills?: Array<string>;
}
interface ChildType extends ParentType {
  hobbies: number[];
}

let persons: ChildType = {
  name: "Tohid",
  age: 22,
  skills: ["HTML", "Js"],
  hobbies: [1, 2],
};

// Utility types
interface User {
  name: string;
  age: number;
}

let Tohid: Partial<User> = {};
// note: Parial keyword makes all fields optional

// Utility types

interface Qadir {
  name?: string;
  age?: number;
}

let qadir: Required<Qadir> = {}; // Required keyword makes all fields required

interface UserObjectType {
  name?: string;
  age?: number;
}

let user: Readonly<UserObjectType> = {
  name: "name",
};
// Readonly keyword make the object fields freeze you can't change the value of fields

let Ruslan: Pick<User, "name" | "age"> = {

}
// Pick keyword makes an interface for you with keys it require 2 parametr 1:Type in this case is it User type 2: Keys keys are free 

interface User {
    name?: string,
    age?: number
};

let Tohid: Omit<User,  "age"> = {
age:
}
// Omit keyword it delete a field in a Type