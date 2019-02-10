class Car {
    name: string;
    acceleration: number = 0;
    constructor(name: string) {
        this.name = name;
    }
    honk() {
        console.log("Tooooooooooooooooot!");
    }
    accelerate(speed: number) {
        this.acceleration += speed;
    }
}
let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
class BaseObject {
    width: number = 5;
    length: number = 2;
}
class Rectangle extends BaseObject {
    public calcSize() {
        return this.length * this.width;
    }
}
let rectangle = new Rectangle();
console.log(rectangle.calcSize());

// Exercise 3
class Person {
    private _firstName: string = "";
    /**
     * Getter firstName
     * @return {string}
     */
	public get firstName(): string {
		return this._firstName;
	}

    /**
     * Setter firstName
     * @param {string} value
     */
	public set firstName(value: string) {
		if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
	}
    
}
let person = new Person();
console.log(person.firstName);
person.firstName = "Ga";
console.log(person.firstName);
person.firstName = "Gaurav";
console.log(person.firstName);