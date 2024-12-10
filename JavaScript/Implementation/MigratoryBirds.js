/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    let max = 0;
    let maxType = 0; // Tipo de pássaro
    let types = [0, 0, 0, 0, 0, 0]; // Array para armazenar os tipos de pássaros

    for(let i = 0; i < arr.length; i++){
        types[arr[i]]++; // Incrementa o tipo de pássaro
    }

    for(let i = 0; i < types.length; i++){
        if(types[i] > max){
            max = types[i];// Atualiza o valor máximo
            maxType = i;// Atualiza o tipo de pássaro
        }
    }
    return maxType;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // 4
console.log(migratoryBirds([3, 4, 4, 4, 3, 3])); // 3