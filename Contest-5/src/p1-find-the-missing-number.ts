/* 

✅✅Find the Missing Number
Given an array nums containing n distinct numbers taken from the range [0, n], return the only number 
in the range that is missing from the array.

Examples
missingNumber([3, 0, 1]);// => 2
missingNumber([0, 1]);// => 2

Example 1
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers. The range is [0, 3]. 2 is missing.

Example 2
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers. The range is [0, 2]. 2 is missing.


Constraints
n === nums.length
1 <= n <= 10^4
0 <= nums[i] <= n
All the numbers of nums are unique.








*/


function missingNumber(nums: number[]): number {
    for (let i = 0; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }

    return -1;
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1]));    // 2





//for missing numbers i.e multiple missing
function missingNumber2(nums: number[]): number[] {

    const missingNums =[];

    for (let i = 0; i <= nums.length; i++) {

        if(!nums.includes(i)){

            missingNums.push(i)

        }

    }

    return missingNums;

}

console.log(missingNumber2([3, 0,4,6, 1]));//[ 2, 5 ]