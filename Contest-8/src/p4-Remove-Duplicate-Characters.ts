/* 
Remove Duplicate Characters
Given a string, return a new string with all duplicate characters removed. The order of the characters 
in the original string must be preserved, and only the first occurrence of each character should be kept.

Example 1
Input: str = "helloo"
Output: "helo"
Explanation: The character 'l' appears twice, 'o' appears twice. The first 'h', 'e', 'l', 'o' are kept.

Example 2
Input: str = "programming"
Output: "progamin"
Explanation: The character 'r' appears twice, 'g' appears twice, 'm' appears twice. The first 'p', 'r', 'o', 'g', 'a', 'm', 'i', 'n' are kept.

Constraints
The input string will contain only ASCII characters.
The length of the input string will be between 0 and 1000.

Topics
string
set
array
easy

Hints
Hint 1. Consider using a data structure to efficiently keep track of characters you've already encountered.

*/

// Set is a built-in JavaScript data structure that stores unique values only. 
// It automatically prevents duplicate values.

function removeDuplicateCharacters(str: string): string {
    const seen = new Set<string>();
    let result = "";

    for (const char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}

console.log(removeDuplicateCharacters("helloo"));
// Output: "helo"
// Explanation: The character 'l' appears twice, 'o' appears twice. The first 'h', 'e', 'l', 'o' are kept.

console.log(removeDuplicateCharacters("programming"));
// Output: "progamin"
// Explanation: The character 'r' appears twice, 'g' appears twice, 'm' appears twice. The first 'p', 'r', 'o', 'g', 'a', 'm', 'i', 'n' are kept.
