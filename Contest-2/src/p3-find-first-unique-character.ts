/* 

Find First Unique Character
Given a string, find the first character that appears only once in the string. 
If no such character exists, return -1.

Example 1
Input: s = "aabbcdeff"
Output: "c"

Example 2
Input: s = "aabb"
Output: -1

Constraints
The input string `s` will consist of lowercase English letters.
`s` length will be between 0 and 1000.

*/




function findFirstUniqueChar(s: string): string|number  {
  
    const charArray=s.split('');
    // console.log(charArray);

    const result = charArray.find((char)=>{
        return charArray.filter((item)=>item==char).length===1;
    });;

    return result ?? -1 ;

}

console.log(findFirstUniqueChar("aabbcdeff"));
console.log(findFirstUniqueChar("aabb"));

