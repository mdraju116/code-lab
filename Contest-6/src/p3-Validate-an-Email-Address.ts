/* 
Validate an Email Address
Write a function isValidEmail that checks whether a given string is a valid email address according to a simplified 
format specification.

A string is considered a valid email address if and only if:
It has the format <local>@<domain>.<tld>.

Local part (before @): Contains at least one character and consists only of alphanumeric characters (a-z, A-Z, 0-9),
periods (.), underscores (_), or hyphens (-).
Domain part (between @ and .): Contains at least one character and consists only of alphanumeric characters 
(a-z, A-Z, 0-9) or hyphens (-).
Top-Level Domain (TLD) (after .): Contains at least two characters and consists only of alphabetical letters 
(a-z, A-Z).
The email must not contain any spaces or additional @ characters.


Examples
isValidEmail("user@example.com");
// => true

isValidEmail("invalid.email@");
// => false


Example 1
Input: email = "user@example.com"
Output: true
Explanation: Standard valid email matching local, domain, and 3-letter TLD.

Example 2
Input: email = "invalid.email@"
Output: false
Explanation: Missing domain and TLD parts.

Constraints
email is a string with length between 0 and 100
email contains only printable ASCII characters

Topics:
string
regex
validation
conditionals

Hints
Hint 1. A regular expression can validate the entire structure at once.
Hint 2. Remember to anchor the regex to the start (^) and end ($) of the string.
Hint 3. Check character sets for each section: local allows `[a-zA-Z0-9._-]`, domain allows `[a-zA-Z0-9-]`, and TLD allows `[a-zA-Z]{2,}`.
*/




function isValidEmail(email: string): boolean {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(email);
}

console.log(isValidEmail("user@example.com"));    // true
console.log(isValidEmail("invalid.email@"));      // false
console.log(isValidEmail("user@domain.c"));       // false
console.log(isValidEmail("user@@domain.com"));    // false
console.log(isValidEmail("user name@domain.com"));// false
