let grades = [73, 67, 40, 33];

for (let i = 0; i < grades.length; i++) {
    let diff = 5 - (grades[i] % 5); // Diferença até o próximo múltiplo de 5
    if (grades[i] < 38) grades[i] = grades[i];// Se a nota for menor que 38, não há arredondamento
    else if (diff < 3) grades[i] += diff;  // Se a diferença for menor que 3,
}                                           // arredonde para cima até o próximo múltiplo de 5
console.log(grades)
