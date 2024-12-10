/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    var n = ar.length;
    var sum=0;
    for(var i=0;i<n;i++){
        sum=sum+ar[i];
    }
    return sum
}
