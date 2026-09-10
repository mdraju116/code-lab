
/* 
Temperature Converter
Given a temperature value and its unit ('C' for Celsius or 'F' for Fahrenheit), convert the temperature to 
the other unit. The result should be a number, rounded to two decimal places.

Examples
convertTemperature(0, 'C');
// Expected output: 32

convertTemperature(32, 'F');
// Expected output: 0

Example 1
Input: value = 0, unit = "C"
Output: 32

Example 2
Input: value = 32, unit = "F"
Output: 0

Constraints
`value` will be a number.
`unit` will be either 'C' or 'F'.
*/



function convertTemperature(value: number, unit: 'C' | 'F'): number {
  
    if(unit==='C'){
        return Number(((9*value)/5 +32).toFixed(2)); 
    }else{
        return Number(((value-32)*5 /9).toFixed(2));
    }

   
}

console.log(convertTemperature(0, 'C'));
console.log(convertTemperature(32, 'F'));
console.log(convertTemperature(0, 'F'));
