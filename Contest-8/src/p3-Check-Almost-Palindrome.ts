/* 
Check Almost Palindrome
Write a function isAlmostPalindrome that takes a string s and returns true if s can be made into a 
palindrome by deleting at most one character, and false otherwise.

A palindrome is a string that reads the same backward as forward.

Examples
isAlmostPalindrome("abca"); // true (remove 'c' -> "aba")
isAlmostPalindrome("abc");  // false

Example 1
Input: s = "abca"
Output: true
Explanation: Deleting 'c' gives 'aba' which is a palindrome.

Example 2
Input: s = "abc"
Output: false
Explanation: Deleting any single character does not form a palindrome.

Constraints
0 <= s.length <= 10^5
s consists of lowercase English letters.

Topics
strings
two-pointers

Hints
Hint 1. Use two pointers starting from the left and right ends of the string.
Hint 2. When characters at the pointers do not match, check if the remaining substring is a palindrome 
after skipping either the left or right character.

 */





function isAlmostPalindrome(s: string): boolean {
  

    return true;
}



isAlmostPalindrome("abca"); // true (remove 'c' -> "aba")
isAlmostPalindrome("abc");  // false