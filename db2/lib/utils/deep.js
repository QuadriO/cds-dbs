/**
 * Flattens an array.
 * @param {Array} arg
 */
function flattenArray (arg) {
  if (!Array.isArray(arg)) return [arg]
  return _flattenDeep(arg)
}

/**
 * Recursive function that actually does the flattening.
 * @param {Array} arg
 */
function _flattenDeep (arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? _flattenDeep(val) : val), [])
}

/**
 * Flattens an array. More efficient, test
 * TODO
 * @param {Array} arg
 */
function flattenArray2 (arg) {
  if (!Array.isArray(arg)) return [arg]
  return arg.flat(Infinity)
}

module.exports = {
  flattenArray,
}
