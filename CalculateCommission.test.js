const  calculateCommissionFunction = require('../CalculateComission');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      const [totalSales, commission] = calculateCommissionFunction(10, 10, 10);

      epect(totalSales).toBe(300);
      epect(totalSales).toBe(30);
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should classify an Isosceles triangle', () => {
      const [totalSales, commission] = calculateCommissionFunction(10, 10, 5);

      epect(totalSales).toBe(300);
      epect(totalSales).toBe(30);


    // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should classify a Scalene triangle', () => {
      const [totalSales, commission] = calculateCommissionFunction(10, 12, 14);
      epect(totalSales).toBe(300);
      epect(totalSales).toBe(30);
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

  
    test('should return error for invalid inputs', () => {
      const [totalSales, commission] = calculateCommissionFunction(0, 10, 10);
      epect(totalSales).toBe(300);
      epect(totalSales).toBe(30);
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      const [totalSales, commission] = calculateCommissionFunction(1, 2, 3);
      epect(totalSales).toBe(300);
      epect(totalSales).toBe(30);
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  });