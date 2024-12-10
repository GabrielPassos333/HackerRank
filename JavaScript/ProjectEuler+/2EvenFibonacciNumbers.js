// //By considering the terms in the Fibonacci sequence whose values do not exceed ,
// //find the sum of the even-valued terms.
// //By considering the terms in the Fibonacci sequence whose values do not exceed , find the sum of the even-valued terms.
//
// //Input Format
// //
// // First line contains T that denotes the number of test cases.
// // This is followed by T lines, each containing an integer, N.
//
// //fibonacci function
// function fibonacci(n) {
//     let a = 0;
//     let b = 1;
//     for(let i = 1; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
//
// // for(let i = 1; i <= 10; i++) {
// //     console.log(fibonacci(i));
// // }
//
//
// function sumEvenFibonacci(n) {
//     let sum = 0;
//     let i = 1;
//     while (fibonacci(i) < n) {
//         if (fibonacci(i) % 2 === 0) {
//             sum += fibonacci(i);
//         }
//         i++;
//     }
//     return sum;
// }


function trem(n) {
    let first, second, sum, finalSum = 0;
    first = 1;
    second = 1;
    for (let i = 1; i < n; i++) {
        sum = first + second;
        if (sum >= n)
            break;
        if (sum % 2 == 0) {
            finalSum += sum;
        }
        first = second;
        second = sum;
    }
    return finalSum;
}
