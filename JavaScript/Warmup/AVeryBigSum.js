
/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

// function aVeryBigSum(ar) {
//     // Write your code here
//     let sum = 0;
//     for (let i = 0; i < ar.length; i++) {
//         sum += ar[i];
//     }
//     return sum;
// }

function parImpar(){
    let arred=Math.floor(Math.random()*100);
    if(arred % 2 === 0) return true;
    else return false;
}
function resposta(){
    if (parImpar() === true) return "Yes - definitely.";
    else return "Ask again later";
}

console.log("Question: Is Codéx better than Udemy yet?");
console.log("Answer: " + resposta());