import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function here

function formatName(name) {
    
    if (typeof name !== "string") return null;
  
    name = name.trim();
  
    if (name === "") return "";
    
    if (/[^a-zA-Z\s]/.test(name)) return null;
  
    return name
      .split(" ") 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" "); 
  }
  

//#endregion


//#region Tests --------------------------------------------------------------------
// Write your tests here.

// Valid inputs
tests.isEqual(formatName("john doe"), "John Doe", 'Formatting "john doe" should return "John Doe"');
tests.isEqual(formatName(" jane   doe "), "Jane Doe", 'Formatting " jane   doe " should return "Jane Doe"');
tests.isEqual(formatName("JANE DOE"), "Jane Doe", 'Formatting "JANE DOE" should return "Jane Doe"');

// Invalid inputs
tests.isNull(formatName(123), 'Formatting 123 (non-string) should return null');
tests.isNull(formatName("@john"), 'Formatting "@john" (special character) should return null');
tests.isNull(formatName("john@doe"), 'Formatting "john@doe" (special character) should return null');
tests.isNull(formatName(null), 'Formatting null should return null');
tests.isNull(formatName(undefined), 'Formatting undefined should return null');

// Edge cases
tests.isEqual(formatName(""), "", 'Formatting an empty string "" should return an empty string');
tests.isEqual(formatName("    "), "", 'Formatting a string with only spaces "    " should return an empty string');
tests.isEqual(formatName("o"), "O", 'Formatting a single letter "o" should return "O"');
tests.isEqual(formatName("a b c"), "A B C", 'Formatting "a b c" should return "A B C"');

//#endregion