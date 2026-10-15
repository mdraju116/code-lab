/* Shopping Cart Total Calculator
/* 

Write a function calculateCartTotal that calculates the final total cost of a shopping cart.

Each item in the items array is an object with:

price (number): the unit price
quantity (number): the number of units
discount (number): the percentage discount on that item (e.g., 10 means 10% off)
The function also accepts a taxRate (number), representing the tax percentage (e.g., 8 means 8% sales tax) applied to the combined total after item discounts.

Return the final total rounded to 2 decimal places.

Examples
Example 1
calculateCartTotal([
  { price: 100, quantity: 2, discount: 10 },
  { price: 50, quantity: 1, discount: 0 }
], 10);
// Returns 253
Explanation:

Item 1: 100 * 2 * (1 - 0.10) = 180
Item 2: 50 * 1 * (1 - 0) = 50
Subtotal = 230
Final Total: 230 * (1 + 0.10) = 253
Example 2
calculateCartTotal([
  { price: 19.99, quantity: 3, discount: 15 }
], 8);
// Returns 55.05
Explanation:

Subtotal = 19.99 * 3 * (1 - 0.15) = 50.9745
Final Total: 50.9745 * (1 + 0.08) = 55.05246
Rounded to 2 decimal places = 55.05
Example 1
Input: items = [{"discount":10,"price":100,"quantity":2},{"discount":0,"price":50,"quantity":1}], taxRate = 10

Output: 253

Explanation: Calculates subtotal of 230 and applies 10% tax to get 253.

Example 2
Input: items = [{"discount":15,"price":19.99,"quantity":3}], taxRate = 8

Output: 55.05

Explanation: Applies 15% discount and 8% tax, rounding to 55.05.

Constraints
items is an array of objects with non-negative numbers price, quantity, and discount (0 to 100).
taxRate is a non-negative number between 0 and 100.
Result should be rounded to 2 decimal places. */