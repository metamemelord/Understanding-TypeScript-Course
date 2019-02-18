// Simple Generic
function echo(data: any): any {
  return data;
}
console.log(echo("Gaurav"));
console.log(echo(22));

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho("Gaurav").length);
console.log(betterEcho(22).toExponential());
// Error -> console.log(betterEcho<string>(30))

// Build-in generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}
printAll<number>([1, 4, 6]);

// Generic Types
const echo2: <T>(data: T) => T = echo; //Echo has type of a FUNCTION which takes a T argument and returns T
console.log(echo("Hello world!"));

// Generic Class
// Simple class
class SimpleMath {
  constructor(baseValue: any, multiplyValue: any) {
    this.baseValue = baseValue;
    this.multiplyValue = multiplyValue;
  }
  baseValue: any;
  multiplyValue: any;
  calculate() {
    return this.baseValue * this.multiplyValue;
  }
}

const simpleMath = new SimpleMath(10, 20);

simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

// Generic class
class SimpleMathGeneric<T extends number | string> {
  baseValue: T;
  multiplyValue: T;
  constructor(baseValue: T, multiplyValue: T) {
    this.baseValue = baseValue;
    this.multiplyValue = multiplyValue;
  }
  calculate() {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMathGeneric = new SimpleMathGeneric<number>(10, 20);
simpleMathGeneric.baseValue = 10;
simpleMathGeneric.multiplyValue = 20;
console.log(simpleMathGeneric.calculate());

// Generic Class with multiple generics
