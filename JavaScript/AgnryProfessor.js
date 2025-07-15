/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
    // Write your code here
    let alunoNoHorario = 0

    for(let i=0; i < a.length; i++){
        if(a[i] <= 0)
            alunoNoHorario = alunoNoHorario + 1;
    }

    if(alunoNoHorario >= k)
        return "NO"
    else
        return "YES"
}