/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill, custo de cada item
 *  2. INTEGER k, item que a Anna não comeu
 *  3. INTEGER b, valor que Anna contribuiu para a conta
 * (ARRAY - k) / 2 = bb -> valor que Anna deveria pagar
 * Print "Bon Appetit" if the bill is fairly split. Otherwise,
 * it should print the integer amount of money that Brian owes Anna.
 */

function bonAppetit(bill, k, b) {
    // Write your code here

    let total = 0;
    let bb = 0;

    for(let i = 0; i < bill.length; i++){
        if(i !== k){
            total += bill[i];
        }
    }

    bb = total / 2;
    b = b - bb;

    if(b === 0) {
        console.log("Bon Appetit");
    }else{
        console.log(b);
    }
}

bonAppetit([3, 10, 2, 9], 1, 12) // 5
bonAppetit([2,4,6], 2, 3) // Bon Appetit
bonAppetit([3, 10, 2, 9], 1, 7) // Bon Appetit