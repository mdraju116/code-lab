/* 
Nine or Nein?
You are given two positive integers, A and B.
Calculate the sum (A + B), difference (A - B), product (A * B), and quotient (A / B).
If at least one of these four values is exactly equal to 9, return the string "Nine". Otherwise, return "Nein".

Example 1
Input: a = 5, b = 4
Output: "Nine"
Explanation: A + B = 9


Example 2
Input: a = 10, b = 1
Output: "Nine"
Explanation: A - B = 9


Constraints
A and B will be positive integers.
A and B will be between 1 and 1000.

*/


function checkMathOperationsForNine(a: number, b: number): string {
    
    if(a+b ===9){
        return "Nine";
    }else if(a-b ===9){
        return "Nine";
    }else if(a*b ===9){
        return "Nine";
    }else if(a/b ===9){
        return "Nine";
    }else{
        return "Nein";
    }

    // return a+b ===9 ?"Nine" : a-b ===9 ? "Nine" : a*b ===9 ? "Nine" :  a/b ===9 ? "Nine" : "Nein";
}

console.log(checkMathOperationsForNine(5,4));
console.log(checkMathOperationsForNine(10,1));
console.log(checkMathOperationsForNine(15,5));

