/**
 * Recursively check if a property is an object (simulates optional chaining)
 *
 * @param {*} prop - Property to test
 * @param {string} [key] - Key name to test (optional)
 * @param {string} [...children] - Sub keys to test (optional)
 * @returns {boolean}
 */
 
function isObject(prop, key, ...children) {
  return typeof prop === 'object' && prop !== null && (typeof key === 'string' ? isObject(prop[key], ...children) : true);
}
