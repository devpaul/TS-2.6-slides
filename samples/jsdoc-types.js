// @ts-check

var foo = Math.random() ? "hello" : 100;

foo.toUpperCase();
//  ~~~~~~~~~~~
//  Error! Property 'toUpperCase' does not exist on type 'string | number'.

// Works!
var bar = /** @type {string} */ (foo);
bar.toUpperCase();

var clearlyNumber = /** @type {string} */ (100);
//                      ~~~~~~~~~~~~~~
// Error! Type 'number' cannot be converted to type 'string'.