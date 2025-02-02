import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinite number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function here.

function multiply(...args) {
  let product = 1;

  for (let arg of args) {
    const num = Number(arg); 
    if (isNaN(num)) return NaN; 
    product *= num; 
  }

  return product;
}

//#endregion

//#region Tests --------------------------------------------------------------------
// Write your tests here.

const tests = test("Multiply function");

// Valid inputs
tests.isEqual(multiply(2, 3), 6, "Product of 2 and 3 should be 6");
tests.isEqual(multiply(1, -4, 5), -20, "Product of 1, -4, and 5 should be -20");
tests.isEqual(multiply(2.5, 4), 10, "Product of 2.5 and 4 should be 10");
tests.isEqual(multiply("3", 2), 6, 'Product of "3" and 2 should be 6');

// Invalid inputs
tests.isNotANumber(multiply("abc", 2), 'Product of "abc" and 2 should return NaN');
tests.isNotANumber(multiply(1, null), "Product of 1 and null should return NaN");
tests.isNotANumber(multiply(undefined, 3), "Product of undefined and 3 should return NaN");
tests.isNotANumber(multiply(NaN, 3), "Product of NaN and 3 should return NaN");

// Edge cases
tests.isEqual(multiply(0, 5), 0, "Product of 0 and any number should be 0");
tests.isEqual(multiply(Infinity, 2), Infinity, "Product of Infinity and any positive number should be Infinity");
tests.isEqual(multiply(-Infinity, -1), Infinity, "Product of -Infinity and -1 should be Infinity");
tests.isEqual(multiply(-Infinity, Infinity), -Infinity, "Product of -Infinity and Infinity should be -Infinity");

//#endregion
