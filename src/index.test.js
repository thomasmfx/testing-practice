import {
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
  calculator
} from "./index";

test('Returns a string with the first character capitalized', () => {
  expect(capitalize('pizza is good')).toBe('Pizza is good')
})

test('Returns a string with the first character capitalized', () => {
  expect(capitalize('   pizza is good')).toBe('Pizza is good')
})