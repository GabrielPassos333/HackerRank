/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelcase(s) {
    // Write your code here
    let contador = 0;

    for(let i = 0; i < s.length; i++){
        let char = s[i]
        if(char === char.toUpperCase() && char !== char.toLowerCase()){
            contador++
        }
    }
    return contador+1;
}

console.log(camelcase("saveChangesInTheEditor"))