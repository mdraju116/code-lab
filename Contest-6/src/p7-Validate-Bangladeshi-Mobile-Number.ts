/* 
Validate Bangladeshi Mobile Number


Medium
144 solved
144 attempted
Topics
Hint
60 XP
Determine if a given string represents a valid Bangladeshi mobile number. A valid number must conform to one of the following formats:

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
*/