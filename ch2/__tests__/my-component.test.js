const Calculator = require('../my-component');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should correctly add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should handle negative numbers', () => {
      expect(calculator.add(-2, 3)).toBe(1);
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('should handle zero', () => {
      expect(calculator.add(0, 5)).toBe(5);
      expect(calculator.add(5, 0)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should throw error for non-number arguments', () => {
      expect(() => calculator.add('2', 3)).toThrow('Both arguments must be numbers');
      expect(() => calculator.add(2, '3')).toThrow('Both arguments must be numbers');
      expect(() => calculator.add(null, 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('subtract', () => {
    test('should correctly subtract two positive numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should handle negative numbers', () => {
      expect(calculator.subtract(-2, 3)).toBe(-5);
      expect(calculator.subtract(-2, -3)).toBe(1);
    });

    test('should handle zero', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
      expect(calculator.subtract(0, 5)).toBe(-5);
      expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('should throw error for non-number arguments', () => {
      expect(() => calculator.subtract('5', 3)).toThrow('Both arguments must be numbers');
      expect(() => calculator.subtract(5, '3')).toThrow('Both arguments must be numbers');
      expect(() => calculator.subtract(undefined, 3)).toThrow('Both arguments must be numbers');
    });
  });
});