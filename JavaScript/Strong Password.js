/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

//Not GOOD!!! Improve!!
//Now it is good

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";

    let hasNumber = false;
    let hasLower = false;
    let hasUpper = false;
    let hasSpecial = false;

    let cont = 0

    for(let i = 0; i < password.length; i++ ){
        const char = password[i]

        if(numbers.includes(char)) hasNumber = true
        else if (lower_case.includes(char)) hasLower = true
        else if (upper_case.includes(char)) hasUpper = true
        else if (special_characters.includes(char)) hasSpecial = true
    }

    if(!hasNumber) cont++
    if(!hasLower) cont++
    if(!hasUpper) cont++
    if(!hasSpecial) cont++

    let completarSenha = 6 - password.length

    return Math.max(completarSenha, cont); //Aqui eu pego o maior valor entre completar a senha e o contador
}

console.log(minimumNumber(3, "Ab1")) // 3
console.log(minimumNumber(11, "#HackerRank"))
