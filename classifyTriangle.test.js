
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(10, 10, 5)).toBe('Isosceles');
    // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(10, 12, 14)).toBe('Scalene');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    
    test('should return error for invalid inputs: side a less than 1', () => {
        // Testing invalid input: side a less than 1
        expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('should return error for invalid inputs: side b less than 1', () => {
        // Testing invalid input: side b less than 1
        expect(classifyTriangle(10, 0, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('should return error for invalid inputs: side c less than 1', () => {
        // Testing invalid input: side c less than 1
        expect(classifyTriangle(10, 10, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('should return error for invalid inputs: side a greater than 200', () => {
        // Testing invalid input: side a greater than 200
        expect(classifyTriangle(201, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('should return error for invalid inputs: side b greater than 200', () => {
        // Testing invalid input: side b greater than 200
        expect(classifyTriangle(10, 201, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('should return error for invalid inputs: side c greater than 200', () => {
        // Testing invalid input: side c greater than 200
        expect(classifyTriangle(10, 10, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('should return "Not a Triangle" for invalid triangle sides: a >= b + c', () => {
        // Testing sides violating triangle inequality: a >= b + c
        expect(classifyTriangle(10, 20, 10)).toBe('Not a Triangle');
    });

    test('should classify an Isosceles triangle: a = 1, b = 1, c = 2', () => {
        // Testing an Isosceles triangle
        expect(classifyTriangle(1, 1, 2)).toBe('Isosceles');
    });

    test('should classify a Scalene triangle: a = 3, b = 4, c = 5', () => {
        // Testing a Scalene triangle
        expect(classifyTriangle(3, 4, 5)).toBe('Scalene');
    });

    test('should return "Not a Triangle" for invalid triangle sides: a + b = c', () => {
        // Testing sides violating triangle inequality: a + b = c
        expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
    });

    test('should classify an Equilateral triangle: a = 200, b = 200, c = 200', () => {
        // Testing an Equilateral triangle
        expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
    });
});
  });
  
