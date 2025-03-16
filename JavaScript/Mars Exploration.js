/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Write your code here

    let contador = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] !== "S"){
            contador++
        }
        if(s[i+1] !== "O"){
            contador++
        }
        if(s[i+2] !== "S"){
            contador++
        }
        i++
        i++
    }
    return contador;
}

console.log(marsExploration("SOSSPSSQSSOR")) // 3
console.log(marsExploration("SOSSOT")) //1
console.log(marsExploration("SOSSOSSOS")) // 0
console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS")) //12