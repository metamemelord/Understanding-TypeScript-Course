// string
let myName: string = "Gaurav";

// number
let myAge: number = 10;

// boolean
let hasHobbies: boolean = false;

// assign types
let myRealAge: number;
myRealAge = 27;

// array
let hobbies: any[] = ["coding", "reading"];
hobbies = [100];
console.log(typeof hobbies);

// tuples
let address: [string, number] = ["Sarjapura, Bangalore", 90];
console.log(address);

// enum
enum Color {
  Gray,
  Green = 100,
  Red
}

let myColor = Color.Red;
console.log(myColor);

// any
let car: any = "Rolls Royce";
car = { brand: "Rolls Royce" };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// Void (functions)
function sayHello(): void {
  console.log("Hehe");
}

// Argument Types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(2, 2));

// function types
let myMultiply: (value1: number, value2: number) => number;
myMultiply = multiply;
console.log(myMultiply(2, 3));

// objects
let userData: { name: string; age: number } = {
  name: "Gaurav",
  age: 10
};
//userData = {}; Cannot reassign to objects | userData - is of form {name: string, age: number}

// Complex object
let hehe: {
  name: { lol: string };
  age: number[];
  callback: (someBool: boolean) => boolean;
} = {
  name: { lol: "Gaurav" },
  age: [10, 20],
  callback: (lel): boolean => {
    return !lel;
  }
};

// Complex object 2

// type alias
type complex = {
  name: { lol: string };
  age: number[];
  callback: (someBool: boolean) => boolean;
};
let hehe2: complex = {
  name: { lol: "Gaurav" },
  age: [10, 20],
  callback: (lel): boolean => {
    return !lel;
  }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "sed";

// check types
let finalValue = 30;
if (typeof finalValue == "number") {
  console.log("finalValue is a number");
}

// never - Not returning nothing, but not returning anything. Has errors or something.
function neverReturns(): never {
  throw new Error("An error!");
}

// Nullable Types
let canBeNull: number | null = 12; // Is strict null checks are true
canBeNull = null;
console.log(canBeNull);
let canAlsoBeNull = null;
console.log(canAlsoBeNull);
