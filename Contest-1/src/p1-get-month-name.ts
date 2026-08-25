/* 
Given an integer monthNumber between 1 and 12, return the English name of the corresponding month, 
with the first letter capitalized.

Example 1
Input: monthNumber = 3
Output: "March"

Example 2
Input: monthNumber = 10
Output: "October"

Constraints
The input `monthNumber` will be an integer between 1 and 12, inclusive.

*/

function getMonthName(monthNumber:number):string {
    // if(monthNumber===1){
    //      return "January";
    // }
  
    switch(monthNumber){
        case 1 :
            return "January";
        case 2 :
            return "February";
        case 3 :
            return "March";
        case 4 :
            return "April";
        case 5 :
            return "May";
        case 6 :
            return "June";
        case 7 :
            return "July";
        case 8 :
            return "August";
        case 9 :
            return "September";
        case 10:
            return "October";
        case 11 :
            return "November";
        default :
            return "December";
    }
    
}
console.log(getMonthName(1));
console.log(getMonthName(3));
console.log(getMonthName(10));
