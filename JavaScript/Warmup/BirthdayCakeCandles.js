function birthdayCakeCandles(candles) {
    // Write your code here
    let max = Math.max(...candles); // spread operator que simplifica a chamada da função Math.max
                                    // e os ... são usados para passar um array como argumento
    let count = 0;
    for(let i=0;i<candles.length;i++){
        if(candles[i] == max){
            count++;
        }
    }
    return count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3])); // 2