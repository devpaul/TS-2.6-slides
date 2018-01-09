// example for --strictPropertyInitialization flag

class Test {
	a: number;  // Ok
	b?: string;
}

class AnotherTest {
	a: number;
	constructor() {
		let x = this.a;  // Error
		this.a = 0;
	}
}
