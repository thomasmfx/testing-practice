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

test('Returns a string with the first character capitalized without whitespaces on both ends', () => {
  expect(capitalize('   pizza is good')).toBe('Pizza is good')
})

test('Returns a reversed string', () => {
  expect(reverseString('I like churros')).toBe('sorruhc ekil I')
})

test('Returns a reversed string without whitespaces on both ends', () => {
  expect(reverseString('   I like churros')).toBe('sorruhc ekil I')
})