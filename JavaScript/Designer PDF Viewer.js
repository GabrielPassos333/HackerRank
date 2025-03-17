/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 * Vai pegar o maior valor da altura da letra e multiplicar pelo tamanho da palavra
 * ZABA, a mair letra seria 7, então 4(tamanho da palavra) * 7 = 28
 */

function designerPdfViewer(h, word) {
    // Write your code here

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let biggest = 0;

    for(let i = 0; i < word.length; i++){
        let index = alphabet.indexOf(word[i]); //indexOf faz a busca do index da letra
        if(h[index] > biggest) biggest = h[index];
    }
    return word.length*biggest;
}

//1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
// abc
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "abc")) // 9
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba")) // 28