/* 

Find Free Time Intervals

Given a list of booked time intervals and a working-day time range, return all available time intervals when 
no booking exists. All time values are numbers representing points in time (e.g., minutes from midnight).

Booked intervals may overlap with each other or extend beyond the working hours. The output should be a 
list of non-overlapping intervals, sorted by their start times.

Examples
findFreeTime([[10, 12], [14, 16]], [9, 17]);
// Expected output: [[9, 10], [12, 14], [16, 17]]

findFreeTime([[10, 12], [14, 16], [11, 15]], [9, 17]);
// Expected output: [[9, 10], [16, 17]]
// Explanation: [10, 12], [11, 15], and [14, 16] merge into one booked block [10, 16].

Example 1
Input: bookedIntervals = [[10,12],[14,16]], workingHours = [9,17]
Output: [[9,10],[12,14],[16,17]]

Example 2
Input: bookedIntervals = [[10,12],[14,16],[11,15]], workingHours = [9,17]
Output: [[9,10],[16,17]]

Constraints
Time values are non-negative numbers.
Intervals `[start, end]` always have `start < end`.
The `workingHours` array will always be a valid interval `[start, end]`.
The output intervals must be sorted by start time and be non-overlapping.

Topics
arrays
intervals
comparison

Hints
Hint 1. First, filter and clip all booked intervals to be strictly within the `workingHours` range.
Hint 2. Then, sort the clipped booked intervals by their start times.
Hint 3. Merge any overlapping booked intervals to get a consolidated list of occupied time.
Hint 4. Finally, find the gaps between the consolidated booked intervals and the `workingHours` boundaries 
to determine the free time.


*/


function findFreeTime(bookedIntervals: number[][], workingHours: [number, number]): number[][] {
    const [workStart, workEnd] = workingHours;

    // Step 1: Clip and filter booked intervals
    const intervals: number[][] = [];

    for (const interval of bookedIntervals) {
        const start = Math.max(interval[0]!, workStart);
        const end = Math.min(interval[1]!, workEnd);

        if (start < end) {
            intervals.push([start, end]);
        }
    }

    // Step 2: Sort intervals by starting time
    intervals.sort((a, b) => a[0]! - b[0]!);

    // Step 3: Merge overlapping intervals
    const merged: number[][] = [];

    for (const current of intervals) {
        const last = merged[merged.length - 1];

        if (last && current[0]! <= last[1]!) {
            last[1] = Math.max(last[1]!, current[1]!);
        } else {
            merged.push([...current]);
        }
    }

    // Step 4: Find free intervals
    const freeIntervals: number[][] = [];
    let currentTime = workStart;

    for (const interval of merged) {
        if (currentTime < interval[0]!) {
            freeIntervals.push([currentTime, interval[0]!]);
        }

        currentTime = interval[1]!;
    }

    // Check for remaining free time
    if (currentTime < workEnd) {
        freeIntervals.push([currentTime, workEnd]);
    }

    return freeIntervals;
}

//Examples
console.log(findFreeTime([[10, 12], [14, 16]], [9, 17]));
// Expected output: [[9, 10], [12, 14], [16, 17]]


console.log(findFreeTime([[10, 12], [14, 16], [11, 15]], [9, 17]));
// Expected output: [[9, 10], [16, 17]]
// Explanation: [10, 12], [11, 15], and [14, 16] merge into one booked block [10, 16].