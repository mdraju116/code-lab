/* 

Find Balanced Split Index
Given an array of numbers nums, find the first 0-based index i (where 0 <= i < nums.length - 1) such that
the sum of elements from index 0 to i (inclusive) equals the sum of elements from index i + 1 to the end of 
the array.

If such an index exists, return i. If no valid split exists, return -1. Both halves must contain at least 
one element.

Examples
Example 1
findBalancedSplit([1, 5, 2, 4]);
// Output: 1
// Explanation: Left sum (indices 0..1) is 1 + 5 = 6. Right sum (indices 2..3) is 2 + 4 = 6.

Example 2
findBalancedSplit([1, 2, 3, 6]);
// Output: 2
// Explanation: Left sum (indices 0..2) is 1 + 2 + 3 = 6. Right sum (index 3) is 6.

Example 1
Input: nums = [1,5,2,4]
Output: 1
Explanation: At index 1, left sum is 1+5=6 and right sum is 2+4=6.

Example 2
Input: nums = [1,2,3,6]
Output: 2
Explanation: At index 2, left sum is 1+2+3=6 and right sum is 6.

Constraints
0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9

Topics
array
prefix-sum

Hints
Hint 1. Calculate the total sum of the array first.
Hint 2. Iterate through the array maintaining a running left sum and calculate the right sum as 
totalSum - leftSum.
Hint 3. Make sure the split leaves at least one element on the right side.

*/


function findBalancedSplit(nums: number[]): number {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        leftSum += nums[i]!;

        const rightSum = totalSum - leftSum;

        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1
}


console.log(findBalancedSplit([1, 5, 2, 4]));
// Output: 1
// Explanation: Left sum (indices 0..1) is 1 + 5 = 6. Right sum (indices 2..3) is 2 + 4 = 6.

console.log(findBalancedSplit([1, 2, 3, 6]));
// Output: 2
// Explanation: Left sum (indices 0..2) is 1 + 2 + 3 = 6. Right sum (index 3) is 6.