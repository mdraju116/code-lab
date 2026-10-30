/* 
Reconcile Product Inventory

You are given an initial inventory of products and a list of transactions. Your task is to apply these 
transactions to the inventory and return the final state of each product's quantity.

For 'stock-in' transactions, add the quantity to the product's current stock.
For 'stock-out' transactions, subtract the quantity. However, a product's stock can never fall below zero. 
If a 'stock-out' transaction would result in a negative quantity, the stock should instead be set to zero.

Products not present in the initial inventory but appearing in transactions should be treated as starting 
with a quantity of zero before any transactions are applied to them.

Example 1
Input: initialInventory = {"apple":10,"banana":5}, transactions = [{"productId":"apple","quantity":3,"type":"in"},{"productId":"banana","quantity":2,"type":"out"}]
Output: {"apple":13,"banana":3}
Explanation: Apple stock increases by 3, banana stock decreases by 2.

Example 2
Input: initialInventory = {"orange":2}, transactions = [{"productId":"orange","quantity":2,"type":"out"},{"productId":"grape","quantity":7,"type":"in"}]
Output: {"grape":7,"orange":0}
Explanation: Orange stock goes to zero. Grape is a new product, starting at 0 and increasing by 7.

Constraints
`initialInventory` will be an object where keys are product IDs (strings) and values are non-negative integers representing quantities.
`transactions` will be an array of objects.
Each transaction object will have `productId` (string), `type` ('in' or 'out'), and `quantity` (non-negative integer).
Product IDs are case-sensitive.
Quantities will be within standard JavaScript number limits.
The number of initial products and transactions will be small enough for efficient processing (e.g., up to 1000 items/transactions).

Topics
arrays
objects
aggregation
maps

Hints
Hint 1. Start by creating a mutable copy of the `initialInventory`.
Hint 2. Iterate through the `transactions` array.
Hint 3. For each transaction, check if the `productId` already exists in your current inventory. 
If not, initialize its quantity to 0.
Hint 4. Use a conditional (if/else if) to handle 'in' and 'out' transaction types.
Hint 5. Remember to use `Math.max(0, ...)` when subtracting for 'stock-out' to ensure the quantity never 
drops below zero.



*/

interface Inventory {
    [productId: string]: number;
}

interface Transaction {
    productId: string;
    type: 'in' | 'out';
    quantity: number;
}


function reconcileInventory( initialInventory: Inventory, transactions: Transaction[]): Inventory {

    const inventory: Inventory = { ...initialInventory };

    for (const transaction of transactions) {

        if (!(transaction.productId in inventory)) {
            inventory[transaction.productId] = 0;
        }

        if (transaction.type === "in") {
            inventory[transaction.productId]! += transaction.quantity;
        }
        else if (transaction.type === "out") {
            inventory[transaction.productId] = Math.max(
                0,
                inventory[transaction.productId]! - transaction.quantity
            );
        }
    }

    return inventory;
}


//examples
console.log(reconcileInventory(
    { "apple": 10, "banana": 5 },
    [{ "productId": "apple", "quantity": 3, "type": "in" }, { "productId": "banana", "quantity": 2, "type": "out" }]
));
// Output: {"apple":13,"banana":3}
// Explanation: Apple stock increases by 3, banana stock decreases by 2.



console.log(reconcileInventory(
    { "orange": 2 },
    [{ "productId": "orange", "quantity": 2, "type": "out" }, { "productId": "grape", "quantity": 7, "type": "in" }]
));
// Output: {"grape":7,"orange":0}
// Explanation: Orange stock goes to zero. Grape is a new product, starting at 0 and increasing by 7.
