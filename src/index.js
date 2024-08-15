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

export function caesarCipher(str) {

};

export function analyzeArray(arr) {

};

export const calculator = (function() {

})();