/* 
✅✅Anagram Checker
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

➡️Given two strings, s1 and s2, determine if they are anagrams of each other.
You should consider the strings to be anagrams if they contain the same letters with the same frequency, 
regardless of case, spaces, or punctuation. Only alphabetic characters should be considered.

➡️Examples
isAnagram("listen", "silent");
// => true

isAnagram("Hello", "world");
// => false

isAnagram("A decimal point", "I'm a dot in place");
// => true

Example 1
Input: s1 = "listen", s2 = "silent"
Output: true

Example 2
Input: s1 = "Hello", s2 = "world"
Output: false

➡️Constraints
Input strings `s1` and `s2` contain English letters, spaces, and punctuation.
The length of `s1` and `s2` will be between 0 and 1000 character






//my own hint: create a frequency object to store the frequency count
=>js => const frequency ={}
=>ts=> const frequency: { [letter: string]: number } = {};  
=>i.e=>const frequency: {      [key]     :  value  } = {}
=>i.e=>const frequency: {      ["a"]     :   1     } = {}

=>ex:
const frequency = {
    h: 1,
    e: 1,
    l: 2,
    o: 1
};

console.log(frequency["h"]); // 1
console.log(frequency["l"]); // 2


*/


//✅✅check frequency of a word
function checkFrequency(s1: string) {

    const frequency: { [letter: string]: number } = {}

    for (let char of s1) {
        if (frequency[char]) {
            frequency[char]++;
        } else
            frequency[char] = 1
    }
    return frequency;
}
// console.log(checkFrequency("hello")); //{ h: 1, e: 1, l: 2, o: 1 }



//✅✅check anagram-1 =normal way
function isAnagram(s1: string, s2: string): boolean {

    //remove space and punctuation  => replace syntax => string.replace(whatToFind, whatToReplace)
    s1 = s1.toLowerCase().replace(/[^a-z]/g, "");
    s2 = s2.toLowerCase().replace(/[^a-z]/g, "");

    const frequency1: { [letter: string]: number } = {};
    const frequency2: { [letter: string]: number } = {};

    for (let char of s1) {
        if (frequency1[char]) {
            frequency1[char]++;
        } else {
            frequency1[char] = 1;
        }
    }
    // console.log(frequency1);//{ l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }

    for (let char of s2) {
        if (frequency2[char]) {
            frequency2[char]++;
        } else {
            frequency2[char] = 1;
        }
    }
    // console.log(frequency2);//{ s: 1, i: 1, l: 1, e: 1, n: 1, t: 1 }


    // comparing
    const keys = Object.keys(frequency1);
    //compare the length
    if (keys.length !== Object.keys(frequency2).length) {
        return false;
    }

    //compare every char
    for (let key of keys) {
        if (frequency1[key] !== frequency2[key]) {
            return false;
        }
    }

    return true;





}

// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("Hello", "world"));
// console.log(isAnagram("A decimal point", "I'm a dot in place"));








//✅✅check anagram-2 = ES6 way
function isAnagram2(s1: string, s2: string): boolean {
    const clean1 = s1.toLowerCase().replace(/[^a-z]/g, "");
    const clean2 = s2.toLowerCase().replace(/[^a-z]/g, "");

    return clean1.split("").sort().join("") ===
           clean2.split("").sort().join("");
}

console.log(isAnagram2("listen", "silent")); // true
console.log(isAnagram2("Hello", "world")); // false
console.log(isAnagram2("A decimal point", "I'm a dot in place")); // true