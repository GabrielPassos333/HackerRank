/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
    // Write your code here
    let shared = 5 //Número de pessoas do primeiro dia
    let curtidas = 0 //Número de curtidas

    for(let i = 0;i < n ; i++){
        let curtidasHoje = Math.floor(shared / 2); //Metade das pessoas compartilham
        curtidas += curtidasHoje; //Adiciona as curtidas do dia
        shared = curtidasHoje * 3; //Cada pessoa que curtiu compartilha com 3 pessoas
    }
    return curtidas; //Retorna o total de curtidas

}
console.log(viralAdvertising(5)) // 9