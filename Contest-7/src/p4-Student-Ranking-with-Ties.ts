/* 
Student Ranking with Ties

Given an array of student objects, assign competition ranks to each student based on their score and return
a new array of student objects sorted by score in descending order.

//Rules
Students are sorted by score from highest to lowest.
If multiple students have equal scores, they receive the same rank, and their original relative order 
should be preserved.
Ranks skip according to the standard competition ranking method (1224 ranking). 
For example, if two students tie for rank 1, the next student gets rank 3.
Each student object in the output should include all original properties plus a rank property.


//Examples
rankStudents([
  { name: "Alice", score: 90 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 85 }
]);

//output:
[
  { name: "Bob", score: 95, rank: 1 },
  { name: "Alice", score: 90, rank: 2 },
  { name: "Charlie", score: 90, rank: 2 },
  { name: "David", score: 85, rank: 4 }
]


rankStudents([
  { name: "Eva", score: 100 },
  { name: "Frank", score: 100 },
  { name: "Grace", score: 100 }
]);

//output:
[
  { name: "Eva", score: 100, rank: 1 },
  { name: "Frank", score: 100, rank: 1 },
  { name: "Grace", score: 100, rank: 1 }
]


Example 1
Input: students = [{"name":"Alice","score":90},{"name":"Bob","score":95},{"name":"Charlie","score":90},{"name":"David","score":85}]
Output: [{"name":"Bob","rank":1,"score":95},{"name":"Alice","rank":2,"score":90},{"name":"Charlie","rank":2,"score":90},{"name":"David","rank":4,"score":85}]
Explanation: Bob gets rank 1. Alice and Charlie tie for score 90 and both receive rank 2. David gets rank 4.

Example 2
Input: students = [{"name":"Eva","score":100},{"name":"Frank","score":100},{"name":"Grace","score":100}]
Output: [{"name":"Eva","rank":1,"score":100},{"name":"Frank","rank":1,"score":100},{"name":"Grace","rank":1,"score":100}]
Explanation: All three students tie for top score and receive rank 1.

Constraints
0 <= students.length <= 1000
0 <= score <= 100
Student names are unique strings

Topics
arrays
objects
ranking
sorting

Hints
Hint 1. First, sort the array of students by score in descending order.
Hint 2. Keep track of each student's original position if needed to maintain order on tied scores.
Hint 3. Loop through the sorted list and assign ranks: if the score is lower than the previous score, 
        the rank becomes current index + 1, otherwise it keeps the previous rank.

 */

interface Student {
  name: string;
  score: number;
}

interface RankedStudent extends Student {
  rank: number;
}

function rankStudents(students: Student[]): RankedStudent[] {
  const sortedStudents = [...students].sort(
    (a, b) => b.score - a.score
  );

  let rank = 1;

  return sortedStudents.map((student, index) => {
    if ( index > 0 && student.score !== sortedStudents[index - 1]!.score ) {
      rank = index + 1;
    }

    return {
      ...student,
      rank: rank,
    };
    
  });
}

//Examples

console.log(rankStudents([
  { name: "Alice", score: 90 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 85 }
]));

//output:
// [
//   { name: "Bob", score: 95, rank: 1 },
//   { name: "Alice", score: 90, rank: 2 },
//   { name: "Charlie", score: 90, rank: 2 },
//   { name: "David", score: 85, rank: 4 }
// ]


console.log(rankStudents([
  { name: "Eva", score: 100 },
  { name: "Frank", score: 100 },
  { name: "Grace", score: 100 }
]));

//output:
// [
//   { name: "Eva", score: 100, rank: 1 },
//   { name: "Frank", score: 100, rank: 1 },
//   { name: "Grace", score: 100, rank: 1 }
// ]
