let nums = [0, 2, 4, 8];
let row = ''; // Valor para guardar todo el contenido de las filas

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        row += `${nums[i]}${nums[j]} `; // Concatena los elementos en la misma línea
    }
    row += '\n'; // Agrega un salto de línea al final de cada fila
}
alert(row); // Imprime la línea completa y elimina espacios finales

