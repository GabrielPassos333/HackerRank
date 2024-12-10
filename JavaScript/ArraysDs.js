/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
    // Write your code here
    let b = [];
    for(let i=0;i<a.length;i++){
        b[i] = a[a.length-i-1];
    }
    return b;
}

let aa = [1, 4, 3, 2];
console.log(reverseArray(aa)); // [2, 3, 4, 1]
