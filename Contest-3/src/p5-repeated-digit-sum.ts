/* 

Repeated Digit Sum
Given a non-negative integer, repeatedly add all its digits until the result has only one digit.

Examples
repeatedDigitSum(9875)
// Expected output: 2
// Explanation: 9 + 8 + 7 + 5 = 29. Then, 2 + 9 = 11. Finally, 1 + 1 = 2.

repeatedDigitSum(123)
// Expected output: 6
// Explanation: 1 + 2 + 3 = 6.

Example 1
Input: n = 9875
Output: 2

Example 2
Input: n = 123
Output: 6

Constraints
The input `n` will be a non-negative integer.

*/






function repeatedDigitSum(n: number): number {

    while (n >= 10) {

        let sum = 0;

        while (n > 0) {
            sum += n % 10;              //0+5 ,0+5+7,  0+5+7+8,  0+5+7+8+9  sum=29
            n = Math.floor(n / 10);     //987 , 98,     9,         0        n=0 ,loop end
        }

        n = sum;    //29, 11, 2
    }

    return n;
}

console.log(repeatedDigitSum(9875));
console.log(repeatedDigitSum(123));






//another approach // converting number to string , again to number arr
/* function repeatedDigitSum2(n: number): number {

    while (n >= 10) {
        let digits = String(n).split("").map(Number);
        // console.log(digits); //[ 9, 8, 7, 5 ]

        let sum = 0;
        for (let num of digits) {
            sum += num;

        }
        n = sum
    }

    return n;

}

console.log(repeatedDigitSum2(9875));
console.log(repeatedDigitSum2(123));
 */
