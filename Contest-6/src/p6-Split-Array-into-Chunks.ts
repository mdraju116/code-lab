/* 
Split Array into Chunks


Given an array arr and a positive integer size, split the array into consecutive subarrays (chunks) where each subarray has a length of at most size.

The final chunk may contain fewer elements than size if the array cannot be split evenly. Return all chunks in a new array.

Examples
chunkArray([1, 2, 3, 4, 5], 2);
// => [[1, 2], [3, 4], [5]]
chunkArray(["a", "b", "c", "d"], 2);
// => [["a", "b"], ["c", "d"]]
Example 1
Input: arr = [1,2,3,4,5], size = 2

Output: [[1,2],[3,4],[5]]

Explanation: Length 5 split into chunks of 2 yields two chunks of length 2 and a remaining chunk of length 1.

Example 2
Input: arr = ["a","b","c","d"], size = 2

Output: [["a","b"],["c","d"]]

Explanation: Length 4 splits evenly into two chunks of length 2.

Constraints
0 <= arr.length <= 10^4
1 <= size <= 10^4

Topics
array
loops
slice
boundaries

Hints

*/