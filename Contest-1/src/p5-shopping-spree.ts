/* 
Shopping Spree
You went shopping to buy cakes and donuts with X tk (the currency of Bangladesh).
First, you bought one cake for A tk at a cake shop.
Then, with the money you had left, you bought as many donuts as possible for B tk each, at a donut shop.
How much do you have left after all your shopping?


Example 1
Input: totalMoney = 100, cakeCost = 20, donutCost = 10
Output: 0
Explanation: Started with 100 tk. Bought cake for 20 tk, 80 tk left. Bought 8 donuts (80 / 10) for 80 tk. 0 tk left.


Example 2
Input: totalMoney = 50, cakeCost = 30, donutCost = 7
Output: 6
Explanation: Started with 50 tk. Bought cake for 30 tk, 20 tk left. Bought 2 donuts (Math.floor(20 / 7)) for 14 tk. 6 tk left.


Constraints
`totalMoney`, `cakeCost`, and `donutCost` are positive integers.
`donutCost` will always be greater than 0.

Please note that you MUST buy the cake regardless of whether you can afford it. 
The problem states "you bought one cake" – this is a mandatory purchase. Always subtract the cake cost from 
the total money first (even if the result becomes negative). Then buy as many donuts as possible with the 
remaining money. If the remaining money is negative, you buy 0 donuts and return the negative balance.
Example: For [10, 20, 5], the output is -10 (10 - 20 = -10, can't buy donuts).

Make sure your code handles this correctly!

*/


function calculateRemainingMoney(totalMoney: number, cakeCost: number, donutCost: number): number {
  
    const moneyAfterCake = totalMoney-cakeCost;

    if (moneyAfterCake < 0) {
        return moneyAfterCake;
    }

    // const remainingMoney = moneyAfterCake%donutCost;
    // return remainingMoney;

    return  moneyAfterCake%donutCost;

}

console.log(calculateRemainingMoney(100,20,10)); //0
console.log(calculateRemainingMoney(50,30,7)); //6
console.log(calculateRemainingMoney(10, 20, 5)); //-10