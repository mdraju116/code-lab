
/* 
Reverse Each Word
Given a string, reverse each word in the string while maintaining the original order of words and spaces.

Examples
reverseEachWord("Hello World");
// Expected output: "olleH dlroW"

reverseEachWord("JavaScript is fun");
// Expected output: "tpircSavaJ si nuf"

Example 1
Input: str = "Hello World"
Output: "olleH dlroW"

Example 2
Input: str = "JavaScript is fun"
Output: "tpircSavaJ si nuf"

Constraints
The input `str` will always be a string.

*/

function reverseEachWord(str: string): string {

const result = str
    .split(" ")
    .map(word => {
        let reversed = "";

        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }

        return reversed;  //["olleH", "dlroW"]
    })
    .join(" ");         // "olleH dlroW"
        
    return result;
}

console.log(reverseEachWord("Hello World"));






//self practice (normal js)

// let string1: string = "Hello world";
// let str2: string[] = string1.split(" ");
// let reversed: string = "";

// for (let i: number = 0; i < str2.length; i++) {
//     for (let j: number = str2[i]!.length - 1; j >= 0; j--) {
//         reversed = reversed + str2[i]![j];
//         //The ! is called the non-null assertion operator.
//         //It means "TypeScript, I guarantee that str2[i] is not undefined here."

//         if (j === 0) {
//             reversed += " ";
//         }
//     }
// }

// console.log(reversed);