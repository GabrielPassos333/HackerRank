/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    for(let i=0; i<n; i++){
        let line = '';
        for(let j=0; j<n; j++){
            if(j < n-i-1){
                line += ' ';
            } else {
                line += '#';
            }
        }
        console.log(line);
    }
}
