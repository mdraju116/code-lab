
// let string1="Hello world";
// let str2="";
// console.log(string1.length);

// for(let i=string1.length-1; i>=0;i--){
//     str2 = str2 + string1[i];
    
// }
// console.log(str2);


let string1="Hello world";
let str3=string1.split(" ")
// console.log(str3);
let str4=""
for(let i=0; i<str3.length;i++){
    // console.log("iteration:",i);
    for(let j=str3[i].length-1;j>=0;j--){
        // console.log("iter:",j);
        str4= str4 + str3[i][j]
        // console.log(str4);
        if(j===0){
            str4 += " "
        }
        
    }
    
}
console.log(str4);
// console.log(str4.split(" "));






