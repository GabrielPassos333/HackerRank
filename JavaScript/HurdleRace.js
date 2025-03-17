/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
    // Write your code here
    let maxHeight = Math.max(...height);
    let doses = 0;

    if(maxHeight > k) {
        doses = maxHeight - k;
    }

    return doses;

}
k=7
height=[1, 6, 3, 5, 2]
console.log(hurdleRace(k, height))