/* 
Title Case a Sentence
Write a function titleCaseSentence that takes a string as input and returns a new string where 
the first letter of each word is capitalized, and the rest of the letters in each word are lowercase.

Words are separated by one or more spaces. Leading or trailing spaces, and multiple spaces between words, 
should be handled gracefully, resulting in a single space separating the title-cased words.

Examples
titleCaseSentence("hello world");
// Expected output: "Hello World"

titleCaseSentence("a short sentence");
// Expected output: "A Short Sentence"

Example 1
Input: str = "hello world"
Output: "Hello World"

Example 2
Input: str = "a short sentence"
Output: "A Short Sentence"

Constraints
The input `str` will be a string.




*/


function titleCaseSentence(str: string): string {
    if (str.trim() === "") {
        return "";
    }

    const words = str.trim().split(/\s+/);

    for (let i = 0; i < words.length; i++) {
        words[i] =
            words[i]![0]!.toUpperCase() +
            words[i]!.slice(1).toLowerCase();
    }

    return words.join(" ");
}
console.log(titleCaseSentence("hello world"));
console.log(titleCaseSentence("a short sentence"));

console.log(titleCaseSentence(""));// ""
console.log(titleCaseSentence("   "));// ""
console.log(titleCaseSentence("  hello   world  "));// "Hello World"
console.log(titleCaseSentence("hELLo wORLd"));// "Hello World"





//using map 
function titleCaseSentence2(str: string): string {
     if (str.trim() === "") {
        return "";
    }

    const words = str.trim().split(/\s+/);

    const finalWords = words.map(word => {
        return word[0]!.toUpperCase() + word.slice(1).toLowerCase();
        
    });

    return finalWords.join(" ");
}
// console.log(titleCaseSentence2("hello worlds")); //Hello Worlds