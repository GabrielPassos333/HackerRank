

function processData(myArray) {
    const uniqueSortedNums = [...new Set(myArray)].sort((a, b) => b - a);//o sort é para ordenar do maior para o menor
    const secondLargest = uniqueSortedNums[1];
    console.log(secondLargest);

}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input.split('\n')[1].split(' ').map(Number));
});