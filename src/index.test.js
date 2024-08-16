import {
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
  calculator
} from "./index";

// capitalize
test('Returns a string with the first character capitalized', () => {
  expect(capitalize('pizza is good')).toBe('Pizza is good')
})

test('Returns a string with the first character capitalized without whitespaces on both ends', () => {
  expect(capitalize('   pizza is good')).toBe('Pizza is good')
})

// reverseString
test('Returns a reversed string', () => {
  expect(reverseString('I like churros')).toBe('sorruhc ekil I')
})

test('Returns a reversed string without whitespaces on both ends', () => {
  expect(reverseString('   I like churros')).toBe('sorruhc ekil I')
})

//analyzeArray
test('Returns correctly average value from array', () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toEqual(4)
})

test('Returns correctly minimum value from array', () => {
  expect(analyzeArray([1,8,3,4,2,6]).min).toEqual(1)
})

test('Returns correctly max value from array', () => {
  expect(analyzeArray([1,8,3,4,2,6]).max).toEqual(8)
})

test('Returns correctly length of array', () => {
  expect(analyzeArray([1,8,3,4,2,6]).length).toEqual(6)
})

// calculator
test('Sums two numbers', () => {
  expect(calculator.add(5, 10)).toEqual(15);
});

test('Subtract two numbers', () => {
  expect(calculator.subtract(18, 6)).toEqual(12);
});

test('Multiply two numbers', () => {
  expect(calculator.multiply(7, 7)).toEqual(49);
});

test('Divide two numbers', () => {
  expect(calculator.divide(21, 3)).toEqual(7);
});
