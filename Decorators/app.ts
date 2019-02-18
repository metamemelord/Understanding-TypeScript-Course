function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person {
  constructor() {
    console.log("hi");
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(false)
class Car {}

// Advanced - Adding a print function to any class
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

@logged
@printable
class Plant {
  name = "Hello";
}

const plant = new Plant();
(<any>plant).print();

// Property Decorator
// Method Decorator
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}

function overwritable(value) {
  return function(target: any, propName: string) {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
}

class Project {
  @overwritable(false) // This will prevent setting this value, even in CONSTRUCTOR
  projectName: string;

  constructor(projectName: string) {
    this.projectName = projectName;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project = new Project("Super project");
project.calcBudget();
project.calcBudget = function() {
  console.log(2000);
};
project.calcBudget();

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("Target: ", target);
  console.log("MethodName: ", methodName);
  console.log("ParamIndex: ", paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumber(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course("Super course");
course.printStudentNumber("anything", true);
course.printStudentNumber("anything", false);
