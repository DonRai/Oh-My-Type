# Oh-My-Type

Oh my type! Tiny and robust type checker.

## Installing

### NPM:

```sh
npm install oh-my-type
```

### Yarn:

```sh
yarn add oh-my-type
```

## Importing

### Using ES6 imports:

```js
import type from 'oh-my-type';
```

### Using CommonJS requires:

```js
const type = require('oh-my-type');
```

## Using

```js
type('string'); // String
type(123); // Number
type(false); // Boolean
type(undefined); // Undefined
type(null); // Null
type(NaN); // NaN
type({}); // Object
type([]); // Array
type(Symbol()); // Symbol
type(() => {}); // Function
type(new Date()); // Date
type(); // Undefined
```
