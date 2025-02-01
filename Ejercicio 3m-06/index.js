'use strict'

let nums = [ 1, 2, 3, 4, 5]
let counter = 0; 

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        counter++;
    }
}       

alert('Números de elementos pares del array: ' + counter); // Imprime el número de elementos pares del array