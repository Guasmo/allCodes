let nums = [0, 2, 4, 8];
let row = ''; // Variable para guardar todo el contenido de las fila

for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) { // Empieza desde `i` para evitar repeticiones
        row += `${nums[i]}${nums[j]} `; // Agrega la combinación a la fila
    }
    row += '\n'; // Agrega un salto de línea al final de cada fila
}

alert(row); // Imprime la fila completa