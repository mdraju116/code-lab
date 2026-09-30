/* 

Common Skills of Two Candidates
Given two arrays of candidate skill names, find all skills shared by both candidates.

The comparison must be case-insensitive. The returned array must:
Contain each shared skill converted to lowercase.
Contain no duplicate values.
Be sorted alphabetically in ascending order.

Examples
commonSkills(["JS", "React", "Node"], ["react", "css", "js"]);
// Returns: ["js", "react"]

commonSkills(["Python", "SQL"], ["Java", "C++"]);
// Returns: []

Example 1
Input: skills1 = ["JS","React","Node"], skills2 = ["react","css","js"]
Output: ["js","react"]
Explanation: Matching skills are "js" and "react", returned in alphabetical order.

Example 2
Input: skills1 = ["Python","SQL"], skills2 = ["Java","C++"]
Output: []
Explanation: No common skills exist.

Constraints
0 <= skills1.length, skills2.length <= 1000
1 <= skills1[i].length, skills2[i].length <= 50
Skill strings contain English letters, numbers, and basic punctuation (e.g., +, #).

*/

function commonSkills(skills1: string[], skills2: string[]): string[] {

    const lowerSkill1 = skills1.map(skill => skill.toLowerCase());
    const lowerSkill2 = skills2.map(skill => skill.toLowerCase());


    const common = lowerSkill1.filter((skill) => lowerSkill2.includes(skill));
    const uniqueCommon = [...new Set(common)].sort();

    return uniqueCommon;
}

//more short
/* 
function commonSkills(skills1: string[], skills2: string[]): string[] {
    const lowerSkill2 = skills2.map(skill => skill.toLowerCase());

    return [...new Set(
        skills1
            .map(skill => skill.toLowerCase())
            .filter(skill => lowerSkill2.includes(skill))
    )].sort();
}

*/

console.log(commonSkills(["JS", "React", "Node"], ["react", "css", "js"]));//  ["js", "react"]
console.log(commonSkills(["Python", "SQL"], ["Java", "C++"]));//  []
console.log(commonSkills( ["JS", "js", "CSS"],["js", "css"])); //[css,js]

