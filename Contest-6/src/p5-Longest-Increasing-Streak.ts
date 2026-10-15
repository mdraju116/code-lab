/* 
Longest Increasing Streak
Given an array of numbers, return the length of the longest contiguous streak in which each number is strictly greater than the previous number.

If the input array is empty, return 0.

Examples
longestIncreasingStreak([1, 2, 3, 1, 2]);
// => 3 (streak [1, 2, 3])
longestIncreasingStreak([5, 4, 3, 2, 1]);
// => 1 (no adjacent element is strictly greater)
Example 1
Input: nums = [1,2,3,1,2]

Output: 3

Explanation: The subarray [1, 2, 3] has length 3 and is strictly increasing.

Example 2
Input: nums = [5,4,3,2,1]

Output: 1

Explanation: No element is greater than its previous element, so any single element of length 1 is the longest streak.

Constraints
0 <= nums.length <= 100_000
-10^9 <= nums[i] <= 10^9

Topics:
array
loops
adjacent-comparison
algorithms

*/