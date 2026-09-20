/* 

✅✅Compress Consecutive Characters
Write a function that takes a string and replaces consecutive repeating characters with the character 
followed by the count. If a character appears only once, do not append a number.

➡️Examples
compressCharacters("aaabbc")
// Expected output: "a3b2c"

compressCharacters("hello")
// Expected output: "hel2o"

Example 1
Input: str = "aaabbc"
Output: "a3b2c"

Example 2
Input: str = "hello"
Output: "hel2o"

➡️Constraints
The input string `str` will contain only lowercase English letters.
The length of `str` will be between 0 and 1000 characters.






*/

function compressCharacters(str: string): string {
  let count = 1;
  let result = "";

  for (let i = 1; i < str.length; i++) {

    if (str[i] === str[i - 1]) {
      count++;

    } else if (count > 1) {
      result += str[i - 1]! + count;
      count = 1;

    } else {
      result += str[i - 1];
      count = 1;
    }
  }

  // process the last char
  if (str.length > 0) {
    if (count > 1) {
      result += str[str.length - 1]! + count;
    } else {
      result += str[str.length - 1];
    }
  }

  return result;
}

// console.log(compressCharacters("aaabbc")); // a3b2c
// console.log(compressCharacters("hello"));  // hel2o






//Es6
function compressCharacters2(str: string): string {
      if (str.length === 0) return "";

      let result = "";
      let count = 1;

      for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
          count++;
        } else {
          result += str[i - 1]! + (count > 1 ? count : "");
          count = 1;
        }
      }

      result += str[str.length - 1]! + (count > 1 ? count : "");

      return result;
}


console.log(compressCharacters2("aaabbc")); // a3b2c
console.log(compressCharacters2("hello"));  // hel2o