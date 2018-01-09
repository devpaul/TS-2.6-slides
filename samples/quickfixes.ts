// #region example for fixing interface referenced property
export interface Foo {
	bar: string;
}

const a: Foo.bar = 'tacos!';
// #endregion

// #region example for fixing JSDOC types
// Quick fix for JSDoc types
const value: * = {};
let num: number? = 10;
// #endregion