/* 

Find Majority Element
Given an array of numbers, find the majority element. The majority element is defined as the element that 
appears more than n / 2 times, where n is the array's length. If no such element exists, return null.

Examples
findMajorityElement([3, 2, 3])
// returns 3

findMajorityElement([2, 2, 1, 1, 1, 2, 2])
// returns 2

findMajorityElement([1, 2, 3])
// returns null

Example 1
Input: nums = [3,2,3]
Output: 3

Example 2
Input: nums = [2,2,1,1,1,2,2]
Output: 2


Topics
Arrays
Hash Map
Frequency Counter



*/


/*
Let's use a Map (Hash Map) to count how many times each number appears.
The Map will store each number and its frequency.

const frequency = new Map<number, number>();

For example, for [3, 2, 3], the Map will eventually contain:
Map {
  3 => 2,
  2 => 1
}

*/

function findMajorityElement(nums: number[]): number | null {
    const frequency = new Map<number, number>();

    for (const num of nums) {
        frequency.set(num, (frequency.get(num) ?? 0) + 1);

    }
    for (const [num, count] of frequency) {
        if (count > nums.length / 2) {
            return num;
        }
    }

    return null;
}
console.log(findMajorityElement([3, 2, 3]));// returns 3
console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2]));// returns 2
console.log(findMajorityElement([1, 2, 3]));// returns null








