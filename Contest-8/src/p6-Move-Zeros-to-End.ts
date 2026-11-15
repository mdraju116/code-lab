/* 

Move Zeros to End

Write a function moveZeros that takes an array of numbers and returns a new array with all 0s moved to 
the end while maintaining the relative order of all non-zero elements.

Examples
Example 1
moveZeros([0, 1, 0, 3, 12]);
// Returns [1, 3, 12, 0, 0]

Example 2
moveZeros([0, 0, 1]);
// Returns [1, 0, 0]


Example 1
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Explanation: Moves the two zeros to the end while preserving the order of 1, 3, 12.

Example 2
Input: nums = [0,0,1]
Output: [1,0,0]
Explanation: Moves the two leading zeros to the end after 1.

Constraints
0 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9

Topics
arrays
two-pointers

Hints
Hint 1. Filter or collect all non-zero elements into a list first.
Hint 2. Count how many zeros were present in the original array, and append that many zeros to the list.


*/


function moveZeros(nums: number[]): number[] {
    const nonZeros = nums.filter((num) => num !== 0);
    const zeroCount = nums.length - nonZeros.length;

    for (let i = 0; i < zeroCount; i++) {
        nonZeros.push(0);
    }

    return nonZeros;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// Returns [1, 3, 12, 0, 0]
console.log(moveZeros([0, 0, 1]));
// Returns [1, 0, 0]