console.log("LET & CONST");
let variable: string = "Test";
console.log(variable);

const levels = 100;
console.log(levels);
//levels = 10;

// Block scope
function reset(): void {
  //console.log(variable); variable is undefined
  let variable = null;
  console.log(variable);
}

reset();
console.log(variable);

console.log("\nARROW FUNCTIONS");
// Arrow functions
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};

const addNumbersArrow = (number1: number, number2: number): number =>
  number1 + number2;
console.log(addNumbers(2, 3));
console.log(`Using arrow: ${addNumbersArrow(2, 3)}`);

const greet = (): void => {
  console.log("Hello!");
};
greet();

const greetFriend = (friend: string): void => {
  console.log(`Hello, ${friend}!`);
};
greetFriend("Gaurav");

// Default Parameters
const printFriend = (name: string = "Darkness"): void => {
  console.log(`Hello ${name}, my old friend`);
};
printFriend();
printFriend("Sadness");

console.log("\nREST & SPREAD");
const numbers: number[] = [1, 2, 61, 44];
console.log(Math.max(1, 2, 6, 44));
console.log(Math.max(...numbers));

function makeArray(name: string, ...args: number[]): number[] {
  return args;
}

console.log(makeArray("Gaurav", 2, 3, 6));

console.log("\nDESTRUCTURING");
// Destructuring
const myHobbies = ["Cooking", "Sports"];
/*
Long typing
let hobby1 = myHobbies[0];
let hobby2 = myHobbies[1];
*/
const [hobby1, hobby2] = myHobbies;
console.log(...myHobbies);
console.log(hobby1, hobby2);

const userData: { userName: string; age: number } = {
  userName: "Gaurav",
  age: 22
};

let { userName: myName, age } = userData;
console.log(myName, age);

console.log("\nTEMPLATE LITERALS");
//Template literals
const userName = "Gaurav";
let greeting = `Hello, ${userName}
How are you?`;
console.log(greeting);
