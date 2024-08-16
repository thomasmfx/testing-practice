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

export function caesarCipher(str, factor) {
  const alphabet = newAlphabet();
  const cipherAlphabet = newCipherAlphabet(factor);
  const punctRegex = /\p{P}/gu;
  let strLetters = str.split('');
  let encrypted = '';

  while (strLetters.length > 0) {
    let letter = strLetters.shift();
    if (punctRegex.test(letter) || letter === ' ') {
      encrypted += letter
      continue;
    };

    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] === letter.toLowerCase()) {
        isUpperCase(letter)
        ? encrypted += `${cipherAlphabet[i].toUpperCase()}`
        : encrypted += `${cipherAlphabet[i]}`
      }
    };
  };

  return encrypted
};

function newAlphabet() {
  return 'abcdefghijklmnopqrstuvwxyz'.split('');
};

function newCipherAlphabet(shiftFactor) {
  let alphabet = newAlphabet();
  let ciphered = [];

  for (let i = shiftFactor; i < alphabet.length; i++) {
    ciphered.push(alphabet[i]);
  };

  alphabet.splice(shiftFactor);
  while (alphabet.length > 0) ciphered.push(alphabet.shift());

  return ciphered;
};

function isUpperCase(str) {
  return str === str.toUpperCase();
};
