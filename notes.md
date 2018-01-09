# New Language Services (IDE)

* Extract Method and Function (2.5)
* Quick fix to correct references to interface properties (2.5)
* Quick fix to correct use of JSDoc type to TS type (2.5)
* Automatic imports from @types (2.6)
* Support outlining with `// #region` (2.6)
* Apply all quick fixes in a file (2.7)

# New Compiler Features (tsc)

* JSDoc casting and assertion of types (2.5)
* Strict function types (2.6)
* Support for JSX fragment (2.6)
* Localization for error messages (2.6)
* Suppress errors using `// @ts-ignore` (2.6)
* Speed improvements to --watch
* Strict property initialization checks in classes

## Deprecations

* Write only references are now considered unused under --noUnusedLocals and --noUnusedParameters.
* In ambient contexts (e.g. declaration files, and declare module blocks), expressions are now disallowed in default exports.
* Uninhabitable types resulting from intersections (number & string, "foo" & 42, etc.) will simplify to never when placed in a union.

# New Language Features

* Optional catch binding (2.5)
* Support for properties named with const-declared symbols (2.7)
* Numeric separators (2.7)

## Improved typing

* Definite assignment assertions (2.7)
* Improved type inference for object literals (2.7)
* Improved handling of structurally identical classes (2.7)
* Type guards inferred from `in` operator (2.7)
