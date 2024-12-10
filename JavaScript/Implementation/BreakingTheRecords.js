let scores = [10,20,0,40,60]

function breakingRecords(scores) {
    // Write your code here
    let maior = scores[0];
    let menor = scores[0];
    let contMaior = 0;
    let contMenor = 0;

    for(let i = 0; i < scores.length; i++) {
        if(scores[i] > maior) {
            maior = scores[i]
            contMaior++;
        }
        if(scores[i] < menor) {
            menor = scores[i];
            contMenor++;
        }
    } return [contMaior, contMenor];
}

console.log(breakingRecords(scores));