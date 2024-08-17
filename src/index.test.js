import {
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
  calculator
} from "./index";

describe("capitalize", () => {
  test('returns capitalized string', () => {
    expect(capitalize('pizza is good')).toBe('Pizza is good')
  });
  test('returns capitalized string without whitespaces', () => {
    expect(capitalize('   pizza is good')).toBe('Pizza is good')
  });
});

describe("reverseString", () => {
  test('returns reversed string', () => {
    expect(reverseString('I like churros')).toBe('sorruhc ekil I')
  });
  test('returns reversed string without whitespaces', () => {
    expect(reverseString('   I like churros')).toBe('sorruhc ekil I')
  });
});

describe('caesarCipher', () => {
  test("returns encrypted string", () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });
  test("follows original lettercase", () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });
  test("respects punctuation", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});
  
describe('analyzeArray', () => {
  test('computes average value of array', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toEqual(4)
  });
  test('computes lowest value in array', () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toEqual(1)
  });
  test('computes highest value in array', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toEqual(8)
  });
  test('computes length of array', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toEqual(6)
  });
});
  
describe('calculator', () => {
  test('sums two numbers', () => {
    expect(calculator.add(5, 10)).toEqual(15);
  });
  test('subtract two numbers', () => {
    expect(calculator.subtract(18, 6)).toEqual(12);
  });
  test('multiply two numbers', () => {
    expect(calculator.multiply(7, 7)).toEqual(49);
  });
  test('divide two numbers', () => {
    expect(calculator.divide(21, 3)).toEqual(7);
  });
});
