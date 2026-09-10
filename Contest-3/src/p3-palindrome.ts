/* 
Is It a Palindrome?
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. 
For this problem, you need to write a function that checks if a given string is a palindrome.

Your function should ignore case, spaces, and punctuation. Only alphanumeric characters (letters and numbers) 
should be considered when determining if the string is a palindrome.

Examples
isPalindrome("madam")
// => true

isPalindrome("A man, a plan, a canal: Panama")
// => true

isPalindrome("hello")
// => false

Example 1
Input: str = "madam"
Output: true

Example 2
Input: str = "A man, a plan, a canal: Panama"
Output: true

Constraints
The input `str` will be a string.
The length of `str` will be between 0 and 1000 characters.

*/


function isPalindrome(str: string): boolean {

    const cleaned =str.toLowerCase()  //amanaplanacanalpanama!
                    .split("")        //['a', ' ', 'm', 'a', 'n', ',',' ', 'a', ' ', 'p', 'l', 'a','n', ',', ' ', 'a', ' ', 'c','a', 'n', 'a', 'l', ':', ' ','p', 'a', 'n', 'a', 'm', 'a']
                    .filter(char=>    //['a', 'm', 'a', 'n', 'a','p', 'l', 'a', 'n', 'a', 'c', 'a', 'n', 'a', 'l','p', 'a', 'n', 'a', 'm','a']
                        (char >="a" && char <="z")||   
                        (char >= "0" && char <="9")   //take only char and number (i.e removes the space and punctuations)

                    )
                    .join("")         //amanaplanacanalpanama

    // console.log(cleaned);  //amanaplanacanalpanama
    

    let reversed = "";

    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i]
    }
    // console.log(reversed);  //amanaplanacanalpanama
    


    return reversed === cleaned;

}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));




//normal js

/* function isPalindrome(str: string): boolean {
    let cleaned = "";

    for (const char of str.toLowerCase()) {
        if (
            (char >= "a" && char <= "z") ||
            (char >= "0" && char <= "9")
        ) {
            cleaned += char;
        }
    }

    let reversed = "";

    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i];
    }

    if (reversed === str) {
        return true;

    } else {
        return false;
    }
} */