/* 

Countdown Time Formatter
Convert a non-negative integer representing total seconds into a formatted string in HH:MM:SS format.

Hours (HH): Total whole hours, padded with leading zeros to at least 2 digits.
Minutes (MM): Remaining minutes (00–59), padded to 2 digits.
Seconds (SS): Remaining seconds (00–59), padded to 2 digits.

Examples
formatCountdown(3661) returns "01:01:01".
formatCountdown(59) returns "00:00:59".

Example 1
Input: totalSeconds = 3661
Output: "01:01:01"
Explanation: 3661 seconds is 1 hour, 1 minute, and 1 second.

Example 2
Input: totalSeconds = 59
Output: "00:00:59"
Explanation: 59 seconds is 0 hours, 0 minutes, and 59 seconds.

Constraints
0 <= totalSeconds <= 10^7
totalSeconds is an integer

Topics
math
formatting
numbers


Hints
Hint 1. Divide totalSeconds by 3600 to find hours, then use modulo to find remaining minutes and seconds.
Hint 2. Use String.prototype.padStart(2, '0') to format components with leading zeros.

*/

function formatCountdown(totalSeconds: number): string {
  
const hh = Math.floor(totalSeconds / 3600);
const mm = Math.floor((totalSeconds % 3600) / 60);
const ss = totalSeconds % 60;


  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`
}
console.log(formatCountdown(3661) );// "01:01:01".
console.log(formatCountdown(59) );// "00:00:59".



