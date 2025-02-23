Task A Explanation:

For the code to be concise I used explicit loops and manual checks to process each argument. The multiply function calculates the result of multiple inputs while handling edge cases. In short, I used "...args" to accept any number or arguments, then converting inputs to numbers and validating them, returning to "NaN" if any argument is invalid. After that, I used a loop starting with an initial product of 1 to multiply the valid numbers, returning the product after processing all arguments.

Task B Explanation:
I used intermediate variables to ensure my code is clear for each step listed. I used a "for...of" loop to process each word and capitalize it. The loop also skips empty strings that are caused by multiple spaces. My code is more lengthy to ensure that it works properly. It has input validation, it trims whitespaces to remove trailing spaces, while checking for empty strings and special characters (in which case it returns to null).

Task C Explanation:
Based on the Fibonacci sequence, I implemented a function that checks any invalid inputs. In case any of the conditions fail, the function returns to null. I set the base cases and started with the two first Fibonacci numbers (a = 0 and b = 1), then used a loop to calculate the numbers up to n. After the loop is complete, it returns the value of , which holds the Fibonacci number at position n.

Task D Explanation:
For this code, I implemented a function that checks if "target" and "guess" are both numbers and integers. It returns null for non-integer numbers, strings, NaN, null and/or undefined. It has comparison logic (returns every result as needed) and handles edge cases (it handles zero, negative numbers correctly and ensures invalid inputs are rejected).
