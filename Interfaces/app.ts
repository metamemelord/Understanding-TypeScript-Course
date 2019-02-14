interface NamedPerson {
  firstName: string;
}

function greet(person: NamedPerson) {
  console.log("Hello, ", person.firstName);
}

const person = {
  firstName: "G.S.",
  name: "Gaurav",
  age: 27
};

greet(person);
