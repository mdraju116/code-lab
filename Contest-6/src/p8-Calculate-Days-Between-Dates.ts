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
*/