function SomaDois(array, numero){
    const map = new Map()

    for (let i = 0; i < array.length; i++) {

        const complement = numero - array[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(array[i], i);
    }
    return null;
}

console.log(SomaDois([2, 7, 11, 15],9));
console.log(SomaDois([3, 2, 4], 6));
console.log(SomaDois([3, 3], 6));