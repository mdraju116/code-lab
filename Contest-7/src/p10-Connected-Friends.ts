/* 


Connected Friends

Given an array of undirected friendships represented as pairs of names [person1, person2], and a startPerson,
return the total number of people in the connected network starting from startPerson (including startPerson 
themselves).

Friendships are mutual. If person A is friends with B, and B is friends with C, then A, B, and C are all in 
the same connected network.

If startPerson has no listed friendships, the size of their network is 1 (just themselves).

Examples
countConnectedFriends([["Alice", "Bob"], ["Bob", "Charlie"], ["David", "Eve"]], "Alice");
// Output: 3

countConnectedFriends([["Alice", "Bob"], ["Charlie", "David"]], "Eve");
// Output: 1


Example 1
Input: friendships = [["Alice","Bob"],["Bob","Charlie"],["David","Eve"]], startPerson = "Alice"
Output: 3
Explanation: Alice is connected to Bob, and Bob is connected to Charlie. Total connected network size is 3.

Example 2
Input: friendships = [["Alice","Bob"],["Charlie","David"]], startPerson = "Eve"
Output: 1
Explanation: Eve has no friends in the list, so only Eve is in her network (size 1).

Constraints
0 <= friendships.length <= 1000
Each element of friendships is a pair of non-empty strings.
startPerson is a non-empty string.

Topics
graphs
traversal
sets
breadth-first-search

Hints
Hint 1. Build an adjacency list (a Map where key is a person and value is an array of their friends).
Hint 2. Use a traversal algorithm like BFS or DFS starting from startPerson.
Hint 3. Keep track of visited people using a Set to avoid infinite loops in cycles and return the size of the set.




*/


function countConnectedFriends(friendships: string[][], startPerson: string): number {

    // Step 1: Build the adjacency list
    const graph = new Map<string, string[]>();

    for (const [person1, person2] of friendships) {

        if (!graph.has(person1!)) {
            graph.set(person1!, []);
        }

        if (!graph.has(person2!)) {
            graph.set(person2!, []);
        }

        graph.get(person1!)!.push(person2!);
        graph.get(person2!)!.push(person1!);
    }

    // Step 2: Initialize visited and queue
    const visited = new Set<string>([startPerson]);
    const queue: string[] = [startPerson];

    // Step 3: Traverse the network using BFS
    while (queue.length > 0) {

        const person = queue.shift()!;

        const friends = graph.get(person) ?? [];

        for (const friend of friends) {

            if (!visited.has(friend)) {
                visited.add(friend);
                queue.push(friend);
            }
        }
    }

    // Step 4: Return the total connected people
    return visited.size;
}


// Examples
console.log(countConnectedFriends([["Alice", "Bob"], ["Bob", "Charlie"], ["David", "Eve"]], "Alice"));
// Output: 3

console.log(countConnectedFriends([["Alice", "Bob"], ["Charlie", "David"]], "Eve"));
// Output: 1