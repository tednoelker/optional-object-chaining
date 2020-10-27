/**
 * Recursively check if a property is an object (simulates optional chaining)
 *
 * @param {*} prop - Property to test
 * @param {string} [...key] - Key/subkey name(s) to test (optional)
 * @returns {boolean}
 */

function isObject(prop, key) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  return typeof prop === "object" && prop !== null && (typeof key === "string" ? isObject.apply(void 0, [prop[key]].concat(children)) : true);
}
