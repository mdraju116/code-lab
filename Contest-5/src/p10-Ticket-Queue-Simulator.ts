/* 

Ticket Queue Simulator
Simulate a customer service ticket line based on a list of event commands. 

Your function should process the commands in order and return an object with two arrays: 
-queue (the people still waiting, in order from front to back) and 
-served (the people who were served, in the order they were served).

The possible commands are:

"join <name>": Adds <name> to the back of the queue. If someone with that name is already in the queue, 
ignore the command.
"leave <name>": Removes <name> from the queue if they are currently waiting. If they are not in the queue, 
ignore the command.
"serve": Removes the person at the front of the queue and appends their name to served. If the queue is empty, 
do nothing.

Note: A person who has been served is no longer in the queue and may join again later.

//Examples
Example 1
simulateTicketQueue([
  "join Rafi",
  "join Sara",
  "serve",
  "join Alex",
  "leave Sara",
  "serve"
]);
// Returns: { queue: [], served: ["Rafi", "Alex"] }

Example 2
simulateTicketQueue([
  "serve",
  "join Bob",
  "join Bob",
  "leave Alice",
  "join Alice",
  "serve"
]);
// Returns: { queue: ["Alice"], served: ["Bob"] }

Example 1
Input: commands = ["join Rafi","join Sara","serve","join Alex","leave Sara","serve"]
Output: {"queue":[],"served":["Rafi","Alex"]}
Explanation: Rafi is served first. Sara leaves, leaving Alex next. Alex is served next.

Example 2
Input: commands = ["serve","join Bob","join Bob","leave Alice","join Alice","serve"]
Output: {"queue":["Alice"],"served":["Bob"]}
Explanation: Initial serve on empty queue does nothing. Duplicate join Bob is ignored. Alice is served after Bob.

Constraints
0 <= commands.length <= 1000
Each command string is either "serve", "join <name>", or "leave <name>"
Names are non-empty strings and case-sensitive




*/

interface QueueResult {
    queue: string[];
    served: string[];
}

function simulateTicketQueue(commands: string[]): QueueResult {
    const queue: string[] = [];
    const served: string[] = [];

    for (const command of commands) {
        const [action, ...parts] = command.split(" ");
        const name = parts.join(" ");

        if (action === "join") {
            if (!queue.includes(name)) {
                queue.push(name);
            }

        } else if (action === "leave") {
            const index = queue.indexOf(name);

            if (index !== -1) {
                queue.splice(index, 1);
            }

        } else if (action === "serve") {
            if (queue.length > 0) {
                const person = queue.shift()!;
                served.push(person);
            }
        }
    }

    return { queue, served };
}

//calling
const commands1 =[
  "join Rafi",
  "join Sara",
  "serve",
  "join Alex",
  "leave Sara",
  "serve"
];
console.log(simulateTicketQueue(commands1));
// { queue: [], served: ["Rafi", "Alex"] }


const commands2=[
  "serve",
  "join Bob",
  "join Bob",
  "leave Alice",
  "join Alice",
  "serve"
];
console.log(simulateTicketQueue(commands2));
//  { queue: ["Alice"], served: ["Bob"] }