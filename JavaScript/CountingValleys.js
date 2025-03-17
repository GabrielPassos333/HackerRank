/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    let seaLevel=0
    let vales=0

    for(let i=0; i < steps; i++) {
        if(path[i] === 'U') {
            seaLevel++;
        } else if(path[i] === 'D') {
            seaLevel--;
        }

        //Checar se o nível do mar é 0 e o passo atual é 'U'
        if(seaLevel === 0 && path[i] === 'U') {
            vales++;
        }
    }
    return vales;
}
console.log(countingValleys((8), 'UDDDUDUU')) // 1
console.log(countingValleys((12), 'DDUUDDUDUUUD')) // 2