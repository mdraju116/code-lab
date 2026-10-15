/* 
Calculate Days Between Dates

Write a function daysBetweenDates that calculates the absolute number of whole days between two calendar dates 
given in YYYY-MM-DD format.

The calculation must accurately account for varying month lengths and leap years. The dates can be provided in 
any order.

Examples
daysBetweenDates("2020-01-15", "2020-01-20");
// 5
daysBetweenDates("2020-01-15", "2019-12-31");
// 15

Example 1
Input: date1 = "2020-01-15", date2 = "2020-01-20"
Output: 5
Explanation: Five days apart in the same month.

Example 2
Input: date1 = "2020-01-15", date2 = "2019-12-31"
Output: 15
Explanation: Spans year boundary, earlier date provided second.

Constraints
Dates are valid strings in `YYYY-MM-DD` format
Years are between 1970 and 2099
The function must return a non-negative integer


Topics
dates
Date-object
math
boundaries

Hint 1. Beware of daylight saving time shifts when parsing dates locally; using UTC avoids 23-hour or 25-hour day
errors.
Hint 2. `Date.UTC(year, monthIndex, day)` creates timestamps consistently without timezone-related offsets.



*/

function daysBetweenDates(date1: string, date2: string): number {
  //date1
  const splitDate1 = date1.split("-");

  const year1 = Number(splitDate1[0]);
  const month1 = Number(splitDate1[1]);
  const day1 = Number(splitDate1[2]);
  const timestamp1 = Date.UTC(year1, month1 - 1, day1);

  //date2
  const splitDate2 = date2.split("-");
  const year2 = Number(splitDate2[0]);
  const month2 = Number(splitDate2[1]);
  const day2 = Number(splitDate2[2]);
  const timestamp2 = Date.UTC(year2, month2 - 1, day2);

  const difference = Math.abs(timestamp1 - timestamp2);
  const days = difference / (1000 * 60 * 60 * 24);

  return Math.floor(days);
}

console.log(daysBetweenDates("2020-01-15", "2020-01-20")); // 5
console.log(daysBetweenDates("2020-01-15", "2019-12-31")); // 15
