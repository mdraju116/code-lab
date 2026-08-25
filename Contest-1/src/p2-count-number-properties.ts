/* 

You will be given an array containing exactly five integer values. Your task is to count how many of these 
values are even, how many are odd, how many are positive, and how many are negative.

Return an object with four properties: even, odd, positive, and negative, each holding the respective count.
Remember that 0 is considered an even number, but it is neither positive nor negative.


Example 1
Input: numbers = [-5,0,3,-4,1]
Output: {"even":2,"negative":2,"odd":3,"positive":2}


Example 2
Input: numbers = [2,4,6,8,10]
Output: {"even":5,"negative":0,"odd":0,"positive":5}


*/



function countNumberProperties(numbers: number[]): { even: number; odd: number; positive: number; negative: number } {
    
    // let positiveCount,negativecount,evenCount,oddCount=0;
    let positiveCount=0;
    let negativecount=0;
    let evenCount=0;
    let oddCount=0;

    for(let item of numbers){
        if(item>0){
            positiveCount++;
        }else if(item<0){    //(item<0) na dile 0 negative er moddhe chole jabe
            negativecount++;
        }

        if(item%2===0 ){  //0 is even number (0%2=0), not positive
            evenCount++;
        }else{
            oddCount++;
        }
    }

  return {even:evenCount,negative:negativecount,odd:oddCount,positive:positiveCount};
 
}

console.log(countNumberProperties([2,4,6,8,10])); //{ even: 5, negative: 0, odd: 0, positive: 5 }
console.log(countNumberProperties([-5,0,3,-4,1])); //{ even: 2, negative: 3, odd: 3, positive: 2 }

