//functions we want to test and links file
const {add, subtract, multiply, divide, clearAllfields} = require("./calculator");

//descibe not necessary in jest - but good practice to declare test block intention

//Two Unit Tests for Addition 
describe("valid additions", () => {
    test("1 + 1 = 2", () => {
      expect(add(1, 1)).toEqual(2);
    });
    test("20 + 20 = 40", () => {
      expect(add(20, 20)).toEqual(40);
    });
  });

//Two Unit Tests for Subtraction
  describe("valid subtractions", () => {
    test("10 - 5 = 5", () => {
      expect(subtract(10, 5)).toEqual(5);
    });
 
    test("70 - 400 = -330", () => {
      expect(subtract(70, 400)).toEqual(-330);
    });
  });

//Two Unit Tests for Multiplication
  describe("valid multiplications", () => {
    test("10 * 10 = 100", () => {
      expect(multiply(10, 10)).toEqual(100);
    });
  
    test("100 * 2.5 = 250", () => {
      expect(multiply(100, 2.5)).toEqual(250);
    });
  });

  //Two Unit Tests for Division
  describe("valid divisions", () => {
    test("100 / 2 = 50", () => {
      expect(divide(100, 2)).toEqual(50);
    });
    test("100 / 2.5 = 40", () => {
      expect(divide(100, 2.5)).toEqual(40);
    });
  });

  // Throw error message when trying to divide by 0
  //Must wrap in function, otherwise the error will not be caught and will fail.
  describe("division error case", () => { 
    test("100 / 0 = throws", () => {
        expect(() => {
            expect(divide(20, 0));
          }).toThrow();
        });
      });

//Two Unit Tests for Decimal
//To avoid rounding errors with decimals use .toBeCloseTo
  describe("valid decimal number", () => {
    test("0.1 + 0.2 = 0.3", () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
    test("33.1 + 33.2 = 66.3", () => {
      expect(add(33.1, 33.2)).toBeCloseTo(66.3);
    });
  });

//Two Unit Tests for Clear all Fields
describe("valid clear all fields", () => {
  test("0 + 0 = 0", () => {
    expect(add(0, 0)).toEqual(0);
  });
  test("28 - 28 = 0", () => {
    expect(subtract(28, 28)).toEqual(0);
  });
});

//Two Unit Tests for Equals
describe("valid equal", () => {

  test('Check if value is number', () => {
    expect(NaN).toBeNaN();
    expect(0.28).not.toBeNaN();
  });
});
