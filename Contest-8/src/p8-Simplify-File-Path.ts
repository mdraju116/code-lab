/* 

Simplify File Path
Given an absolute file path, simplify it.

The rules for simplification are:
. means the current directory and should be ignored.
.. means going up one directory level. If you are at the root directory, .. has no effect.
Multiple consecutive slashes (e.g., //) are treated as a single slash.
A path always starts with a single slash /.
A path does not end with a trailing / unless it is the root path itself (/).


Examples
simplifyPath("/home/")
// Expected output: "/home"

simplifyPath("/home/user/../docs/./file.txt")
// Expected output: "/home/docs/file.txt"


Example 1
Input: path = "/home/"
Output: "/home"

Example 2
Input: path = "/home/user/../docs/./file.txt"
Output: "/home/docs/file.txt"

Constraints
`path` is a string representing an absolute path.
`path` consists of English letters, digits, '.', '..', '/', and possibly other characters.
`path` always starts with `/`.

Topics
string
stack
file-system

Hints
Hint 1. Consider splitting the path string into components.
Hint 2. A stack data structure can be useful to keep track of directory levels.
Hint 3. Remember to handle `.` (current directory), `..` (parent directory), and multiple slashes correctly.


*/

function simplifyPath(path: string): string {
    const parts = path.split("/");
    const stack: string[] = [];

    for (const part of parts) {
        if (part === "" || part === ".") {
            continue;
        }
        if (part === "..") {
            stack.pop(); //removes the last directory i.e before /..
        }else {
            stack.push(part);
        }
    }

    return "/" + stack.join("/");
}

console.log(simplifyPath("/home/"));
// Expected output: "/home"

console.log(simplifyPath("/home/user/../docs/./file.txt"));
// Expected output: "/home/docs/file.txt"