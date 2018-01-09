// #region Class definitions
class Animal {
	readonly name: string;

	constructor(name: string) {
		this.name = name;
	}
}

class Dog extends Animal {
	bark() { }
}

class Cat extends Animal {
	meow() { }
}
// #endregion

declare let f1: (x: Animal) => void;
declare let f2: (x: Dog) => void;
declare let f3: (x: Cat) => void;

f1 = f2;  // Error with --strictFunctionTypes
f2 = f1;  // Ok
f2 = f3;  // Error
