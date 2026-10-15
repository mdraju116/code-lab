/* 

Sum the Main and Secondary Diagonals

Given a square 2D array matrix of numbers, write a function diagonalSums that returns an object containing two 
properties: main (the sum of elements on the main diagonal) and secondary (the sum of elements on the secondary 
diagonal).

The main diagonal runs from the top-left corner to the bottom-right corner (matrix[i][i]). The secondary diagonal 
runs from the top-right corner to the bottom-left corner (matrix[i][n - 1 - i]). If the matrix has odd dimensions(3*3), 
the center element is part of both diagonals and should be included in both sums.

Examples
Example 1
diagonalSums([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
// Returns: { main: 15, secondary: 15 }
Example 2
diagonalSums([
  [1, 2],
  [3, 4]
]);
// Returns: { main: 5, secondary: 5 }

Example 1
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: {"main":15,"secondary":15}
Explanation: Main diagonal: 1 + 5 + 9 = 15. Secondary diagonal: 3 + 5 + 7 = 15.

Example 2
Input: matrix = [[1,2],[3,4]]
Output: {"main":5,"secondary":5}
Explanation: Main diagonal: 1 + 4 = 5. Secondary diagonal: 2 + 3 = 5.

Constraints
matrix is an N x N 2D array where 0 <= N <= 100
Each matrix element is a number between -1000 and 1000

Topics
matrix
arrays
loops
math

Hints
Hint 1. For row index `i`, the main diagonal element is at `matrix[i][i]`.
Hint 2. For row index `i`, the secondary diagonal element is at `matrix[i][n - 1 - i]` where `n` is `matrix.length`.

*/

function diagonalSums(matrix: number[][]): { main: number; secondary: number } {
  let main = 0;
  let secondary = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    main = main + matrix[i]![i]!;
    secondary = secondary + matrix[i]![n - 1 - i]!;
  }

  return { main, secondary };
}

console.log(
  diagonalSums([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
// Returns: { main: 15, secondary: 15 }

console.log(
  diagonalSums([
    [1, 2],
    [3, 4],
  ]),
);
// Returns: { main: 5, secondary: 5 }
