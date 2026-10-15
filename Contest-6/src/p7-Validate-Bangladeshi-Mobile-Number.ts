/* 
Validate Bangladeshi Mobile Number
Determine if a given string represents a valid Bangladeshi mobile number. A valid number must conform to one of 
the following formats:

Starts with 01, followed by 9 more digits. The digit immediately after 01 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., 01712345678)
Starts with +8801, followed by 9 more digits. The digit immediately after +8801 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., +8801712345678)
Starts with 8801, followed by 9 more digits. The digit immediately after 8801 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., 8801712345678)
All characters must be digits, except for the optional leading + sign.


Example 1
Input: phoneNumber = "01712345678"
Output: true

Example 2
Input: phoneNumber = "+8801987654321"
Output: true

Constraints
The input `phoneNumber` will be a string.

Topics
string
regex
validation
conditionals

Hints
Hint 1. Consider using regular expressions to match the different valid patterns.
Hint 2. Pay attention to the specific prefixes (`01`, `+8801`, `8801`) and the allowed digits immediately following them.
Hint 3. Ensure the total length of the number matches the expected format for each case.

*/

function isValidBdMobileNumber(phoneNumber: string): boolean {
    return /^(01|8801|\+8801)[3-9]\d{8}$/.test(phoneNumber);
}

console.log(isValidBdMobileNumber("01712345678"));   // true
console.log(isValidBdMobileNumber("+8801987654321")); // true
console.log(isValidBdMobileNumber("8801712345678"));  // true

console.log(isValidBdMobileNumber("01212345678"));   // false
console.log(isValidBdMobileNumber("0171234567"));    // false
console.log(isValidBdMobileNumber("017123456789"));  // false
console.log(isValidBdMobileNumber("abc01712345678")); // false

