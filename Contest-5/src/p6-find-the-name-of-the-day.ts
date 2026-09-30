/* 


What Day Is It?
Write a function that takes a year, month, and day as numbers and returns the name of the weekday 
for that date.

Note that the month parameter is 1-indexed (1 for January, 2 for February, ..., 12 for December).

Examples
getDayOfWeek(2024, 5, 11); // "Saturday"
getDayOfWeek(2023, 1, 1);   // "Sunday"

Example 1
Input: year = 2024, month = 5, day = 11
Output: "Saturday"
Explanation: May 11, 2024 was a Saturday.

Example 2
Input: year = 2023, month = 1, day = 1
Output: "Sunday"
Explanation: January 1, 2023 was a Sunday.

Constraints
year will be an integer between 1900 and 2100.
month will be an integer between 1 and 12.
day will be a valid day for the given month and year.

*/


function getDayOfWeek(year: number, month: number, day: number): string {
    const utcTimestamp = Date.UTC(year, month - 1, day);//Create the date using UTC rather than the computer's local timezone.
    const date = new Date(utcTimestamp); //UTC=Coordinated Universal Time.
    
    const weekdays = [
        "Sunday", "Monday", "Tuesday", "Wednesday", 
        "Thursday", "Friday", "Saturday"
    ];
    
    return weekdays[date.getUTCDay()]!;
}
console.log(getDayOfWeek(2024, 5, 11));// "Saturday"
console.log(getDayOfWeek(2023, 1, 1));// "Sunday"


/* 
Why this handles hidden edge cases:
Time Zone Safe (getUTCDay): If the test runner evaluates your code in a specific timezone, standard local getDay() can sometimes roll over backward/forward depending on midnight transitions. getUTCDay() fixes this entirely.

Leap Years & Month Ends: Date.UTC natively manages valid length checks for tricky dates (e.g., February 29 in a leap year vs. non-leap year, or 30/31-day month boundaries specified in the constraints).

Full Year Range (1900–2100): Passing 4-digit explicit integers directly into Date.UTC prevents any century parsing anomalies.

*/