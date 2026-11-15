/* 

Next Greater Element
Write a function nextGreaterElement that takes an array of numbers nums and returns a new array where each 
element at index i is replaced by the first greater element appearing to its right in nums. If no element to 
the right is strictly greater than nums[i], use -1 instead.

Examples
Example 1
Input: nums = [4,5,2,25]
Output: [5,25,25,-1]
Explanation: 4's next greater is 5; 5's is 25; 2's is 25; 25 has none, so -1.

Example 2
Input: nums = [13,7,6,12]
Output: [-1,12,12,-1]
Explanation: 13 has none (-1); 7 and 6 both have 12 as their next greater element; 12 has none (-1).

Constraints
0 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9

Topics
arrays
stack

Hints
Hint 1. You can solve this with a nested loop for an O(n^2) approach, or use a stack to process elements in 
linear O(n) time.
Hint 2. When using a stack, keep track of indices whose next greater element has not yet been found.

*/





function nextGreaterElement(nums: number[]): number[] {
    const result = new Array(nums.length).fill(-1); //if no greater element is found, the answer should remain -1

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j]! > nums[i]!) {
                result[i] = nums[j]!;
                break;
            }
        }
    }

    return result;
}

console.log(nextGreaterElement([4, 5, 2, 25]));
// Output: [5,25,25,-1]
// Explanation: 4's next greater is 5; 5's is 25; 2's is 25; 25 has none, so -1.

console.log(nextGreaterElement([13, 7, 6, 12]));
// Output: [-1,12,12,-1]
// Explanation: 13 has none (-1); 7 and 6 both have 12 as their next greater element; 12 has none (-1).
