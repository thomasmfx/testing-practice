export function capitalize(str) {
  str = str.trim();
  return str.charAt(0).toUpperCase() + str.slice(1)
};

export function reverseString(str) {
  let strArray = Array.from(str.trim()).reverse();
  str = '';
  for (const char of strArray) str += char;
  return str;
};

export function caesarCipher(str, shiftFactor) {

};

export function analyzeArray(arr) {
  arr = arr.sort()
  let object = {
    length: arr.length,
    average: arr.reduce((prev, cur) => prev + cur, 0) / arr.length,
    min: arr.shift(),
    max: arr.pop()
  };
  return object;
};

export const calculator = (function() {
  function add(a, b) {
    return a + b
  };

  function subtract(a, b) {
    return a - b
  };

  function multiply(a, b) {
    return a * b
  };

  function divide(a, b) {
    return a / b
  };

  return { add, subtract, multiply, divide };
})();