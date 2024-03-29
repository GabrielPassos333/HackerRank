let arr =[7, 69, 2, 221, 8974];
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    // Write your code here
    let min=0, max=0;
    for(let i=0;i<arr.length-1;i++){
        min += arr[i];
    }

    for(let j=1;j<arr.length;j++){
        max += arr[j];
    }
    //imprimindo o resultado separado por espaço
    console.log(`${min} ${max}`);
}
miniMaxSum(arr);