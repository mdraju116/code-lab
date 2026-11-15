/* 


Compare Version Numbers
Compare two version strings version1 and version2 and return -1, 0, or 1.

A version string consists of one or more revisions separated by a dot .. Each revision contains digits 
and can have leading zeros. Revisions are compared numerically from left to right.

If one version string has fewer revisions than the other, treat the missing revisions as 0.

Return 1 if version1 > version2
Return -1 if version1 < version2
Return 0 if version1 === version2

Examples
Example 1
compareVersions("1.10", "1.2");
// Returns 1 (revision 10 is greater than revision 2 )

Example 2
compareVersions("1.0.1", "1");
// Returns 1 ("1" is treated as "1.0.0", so 1 > 0 at index 2)


Example 1
Input: version1 = "1.10", version2 = "1.2"
Output: 1
Explanation: 10 is greater than 2 at the second revision level.

Example 2
Input: version1 = "1.0.1", version2 = "1"
Output: 1
Explanation: "1" is equivalent to "1.0.0". Revision 1 is greater than revision 0 at the third level.


Constraints
1 <= version1.length, version2.length <= 500
version1 and version2 contain only digits and '.'
All revision values fit within a standard 32-bit integer

Topics
strings
parsing

Hints
Hint 1. Split each string by '.' to convert revision sections into arrays of numbers.
Hint 2. Loop through up to the maximum array length, filling missing elements with 0.
Hint 3. Compare corresponding numbers sequentially from left to right.


*/


function compareVersions(version1: string, version2: string): number {

    const revisions1 = version1.split(".").map(Number);
    const revisions2 = version2.split(".").map(Number);

    const maxLength = Math.max(revisions1.length, revisions2.length);

    for (let i = 0; i < maxLength; i++) {

        const num1 = revisions1[i] ?? 0;
        const num2 = revisions2[i] ?? 0;

        if (num1 > num2) {
            return 1;
        }

        if (num1 < num2) {
            return -1;
        }
    }

    return 0
}

console.log(compareVersions("1.10", "1.2"));
// Returns 1 (revision 10 is greater than revision 2 )

console.log(compareVersions("1.0.1", "1"));
// Returns 1 ("1" is treated as "1.0.0", so 1 > 0 at index 2)