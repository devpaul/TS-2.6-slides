export interface Foo {
	bar: string;
}

// Quick fix to fix indexed access types
const a: Foo.bar = 'tacos!';
