/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
    // Write your code here
    let height = 1; // A árvore começa com 1 metro de altura
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            // Primavera: dobra a altura
            height *= 2;
        } else {
            // Verão: aumenta 1 metro
            height += 1;
        }
    }
    return height;
}

console.log(utopianTree(4))
/*
0-1 inicia
1-2 dobra
2-3 soma 1
3-6 dobra
4-7 soma 1
 */