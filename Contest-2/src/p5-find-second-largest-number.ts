/* 
Find Second Largest Unique Number
Given an array of numbers, return the second largest unique number. If there are fewer than 
two unique numbers in the array, return null.

Example 1
Input: numbers = [10,5,20,5,15]
Output: 15

Example 2
Input: numbers = [3,3,3]
Output: null

Constraints
The input `numbers` will be an array of integers.
The array can contain positive, negative, or zero values.
The array length will be between 0 and 1000.

*/


function findSecondLargestUnique(numbers: number[]): number | null {
    
    let firstLargest=-Infinity;

    for(let num of numbers){
        if(num >firstLargest){
            firstLargest=num;
        }
    }

    let secondLargest=-Infinity;
    for(let num of numbers){
        if(num>secondLargest && num <firstLargest){
            secondLargest=num;
        }
    }

    if(secondLargest===-Infinity){   //“If we could not find any valid second-largest unique number, return null.”
                                    //num > secondLargest && num < firstLargest
                                    // If no number satisfies this condition, secondLargest never changes.
                                    //So it remains:-Infinity  => return null
        return null; 
    }

  return secondLargest;

//=>ES6 
/* 
function findSecondLargestUnique(numbers: number[]): number | null {
    const uniqueNumbers = [...new Set(numbers)];

        //Set removes the duplicate values.
        //new Set([10, 5, 20, 5, 15])       becomes: Set {10, 5, 20, 15}
        //and [...new Set(numbers)]         becomes: [10, 5, 20, 15]

    uniqueNumbers.sort((a, b) => b - a);   
        //if b-a is positve, then b goes before a, and if negative a goes before b
        //Result:[20,  15,  10,  5]

    return uniqueNumbers.length >= 2 ? uniqueNumbers[1] : null;
        //uniqueNumbers[0] = 20   uniqueNumbers[1] = 15   => return 15
        //For [3,3,3], after [...new Set([3,3,3])]  uniqueNumbers becomes: [3] , so length is only 1   =>return null


}


*/


}
console.log(findSecondLargestUnique([10,5,20,5,15]));//15
console.log(findSecondLargestUnique([3, 3, 3]));// null
console.log(findSecondLargestUnique([-10, -5, -20]));// -10
console.log(findSecondLargestUnique([5]));// null