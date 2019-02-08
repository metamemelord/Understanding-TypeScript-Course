let myName: string = "Max";
let myAge: number = 27;
let anything;
anything = 12;

// myName = 30;

function controlMe(isTrue: boolean) {
  // "noUnusedParameters": true
  let result: number = 20;
  if (isTrue) {
    result = 12;
  }
  return result; // Shows error when strictNullChecks is on
}
