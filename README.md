# Optional Object Chaining

A recursive check to test whether a property and any number of sub-keys are an object (similar to [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)).

- [ES6 function](https://github.com/tednoelker/optional-object-chaining/blob/main/es6.js)
- [ES5 function](https://github.com/tednoelker/optional-object-chaining/blob/main/es65.js)

Examples:
```js
const colors = {
  orange: true,
  blue: false,
  red: {
    dark: true,
    light: false,
    seeAlso: ['pink'],
  },
};

isObject(colors) // true
isObject(colors, 'orange') // false
isObject(colors, 'red') // true
isObject(colors, 'red', 'dark') // false
isObject(colors, 'red', 'seeAlso') // true
```
