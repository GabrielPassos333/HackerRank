/* DONE
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    let cont = 0;

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if((ar[i]+ar[j])%k == 0){
                cont++;
            }
        }
    }
    return cont;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // 5
