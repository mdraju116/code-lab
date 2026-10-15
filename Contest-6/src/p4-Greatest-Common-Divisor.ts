/* 

Greatest Common Divisor

Write a function gcd that computes the greatest common divisor (GCD) of two non-negative integers a and b.
The greatest common divisor is the largest positive integer that divides both numbers without leaving a remainder.

If one of the numbers is 0 and the other is positive, their GCD is the positive number.
If both numbers are 0, return 0.

Examples
gcd(12, 18);
// 6
gcd(7, 13);
// 1

Example 1
Input: a = 12, b = 18
Output: 6
Explanation: 6 is the largest integer that divides both 12 and 18.

Example 2
Input: a = 7, b = 13
Output: 1
Explanation: 7 and 13 are coprime, so their GCD is 1.

Constraints
0 <= a, b <= 10^9

Topics:
math
numbers
loops
algorithms

Hints
Hint 1. Look up the Euclidean algorithm: `gcd(a, b) = gcd(b, a % b)`.
Hint 2. Repeat the remainder step in a loop until the remainder becomes 0.

*/


function gcd(a: number, b: number): number {
    while (b !== 0) {
        const rem = a % b;
        a = b;
        b = rem;
    }

    return a;
}

console.log(gcd(12, 18));// 6
console.log(gcd(7, 13));// 1