/* 
Truncate String with Ellipsis
Medium
444 solved
445 attempted
Topics
Hint
60 XP
Truncate a given string if its length is greater than the specified maxLength. If truncation occurs, append "..." to the end of the truncated string. If the string's length is already within or equal to maxLength, return the string unchanged.

Special consideration: If maxLength is 3 or less and truncation is necessary, the result should simply be "..." as there isn't enough space for both content and the ellipsis.

Examples
truncateString("Hello world, this is a long string", 10)
// Expected output: "Hello w..."

truncateString("Short text", 15)
// Expected output: "Short text"
Example 1
Input: str = "Hello world, this is a long string", maxLength = 10

Output: "Hello w..."

Example 2
Input: str = "Short text", maxLength = 15

Output: "Short text"

Constraints
`str` will be a string.
`maxLength` will be a non-negative integer.



*/