// Ejercicio 17. Muestra la posición que ocupa cada tenista
// rankingTenis = ["Djokovic","Alcaraz","Medvedev","Sinner"];

// for (let i = 0; i < rankingTenis.length; i++) {
//     console.log(`${rankingTenis[i]} ocupa la posición ${i+1}`);
// }

// Ejercicio 18: Agrega los meses faltantes del primer semestre
// let months = ["Enero", "Febrero", "Marzo"];

// months.push('septiembre', 'octumbre', 'noviembre', 'diciembre'); 

// console.log(months);


// Ejercicio 19: Elimina los números negativos del array
// let numbers = [10, -5, 8, -3, 7, -1];

// let positiveNumbers = numbers.filter(number => number >= 0);

// console.log(positiveNumbers);

// Ejercicio 20: Verifica si la lista de invitados contiene a "Juan"
// let invitados = ["Ana", "Carlos", "Luis", "María"]; 
// invitados.find(invitado => invitado === "Juan") ? 
// console.log("Juan está en la lista de invitados") : 
// console.log("Juan no está en la lista de invitados");

// console.log(invitados)

// Ejercicio 21: Extrae los tres primeros elementos del array de temperaturas
// let temperaturas = [23, 25, 20, 18, 30, 15];

// let firtsArrays = temperaturas.slice(0, 3)

// console.log(firtsArrays)

// Ejercicio 22: Reemplaza el elemento "perro" por "gato" en el array de mascotas
// let mascotas = ["perro", "conejo", "hamster", "loro", "perro"];

// mascotas.splice(0,1, 'gato')

// console.log(mascotas); // ["gato", "conejo", "hamster", "loro", "gato"]

// Ejercicio 23: Encuentra el primer número mayor que 50 en el array
// let edades = [25, 42, 60, 33, 50];

// let edadMayorQue50 = edades.find(edad => edad > 50);

// console.log(edadMayorQue50)

// Ejercicio 24: Filtra los números pares del siguiente array
// let valores = [10, 15, 22, 33, 40, 55];

// let valoresPares = valores.filter(valor => valor % 2 === 0)

// console.log(valoresPares)

// Ejercicio 25: Muestra cada nombre en mayúsculas
// let nombres = ["Laura", "Pedro", "Andrés", "Marta"];

// let namesWithUpper = nombres.map(nombre => nombre.toUpperCase())

// console.log(namesWithUpper)

// Ejercicio 26: Crea un nuevo array con cada número multiplicado por 3
// let numeros = [1, 2, 3, 4, 5];

// let newArr = numeros.map( n => n * 3)

// console.log(newArr)

// Ejercicio 27: Combina los siguientes arrays de productos electrónicos
// let electronicos1 = ["Laptop", "Tablet"];
// let electronicos2 = ["Smartphone", "Smartwatch"];

// let newArr = electronicos1.concat(electronicos2)

// console.log(newArr)

// Ejercicio 28: Elimina el primer elemento del array de vehículos
// let vehiculos = ["Carro", "Moto", "Bicicleta"];

// vehiculos.shift()

// console.log(vehiculos)

// Ejercicio 29: Encuentra la posición de "Manzana" en el array de frutas
// let frutas = ["Pera", "Banana", "Manzana", "Uva"];

// let position = frutas.indexOf('Manzana')

// console.log('esta en la posicion ' + position)

// Ejercicio 30: Verifica si el array contiene el número 100
// let valoresNumericos = [50, 75, 100, 125];

// let buscar=valoresNumericos.indexOf(100)

// console.log(buscar)

// Considerando el siguiente Array base
// Resolver los siguientes:
let nums = [2, 4, 0, 8, 10];
// 31. Agrega el número 12 al final del array.
// nums.push(12)
// console.log(nums)
// 32. Elimina el último elemento del array.
// nums.pop()
// console.log(nums)
// 33. Elimina el primer elemento del array.
// nums.shift()
// console.log(nums)
// 34. Encuentra la posición del número 8 en el array.
// let position = nums.indexOf(8)
// console.log(position)
// 35. Verifica si el número 4 está en el array.
console.log(nums.includes(4))
// 36. Crea una copia del array desde la posición 1 hasta 3 (sin incluir el índice 3).
// let copy = nums.slice(1, 3)
// console.log(copy)
// 37. Elimina 1 elemento desde la posición 1 e inserta 5 y 6 en su lugar.
// nums.splice(1,1,5,6)
// console.log(nums)
// 38. Busca el primer número mayor a 5.
// let firstNum = nums.find(n => n>5)
// console.log(firstNum)
// 39. Obtiene todos los números mayores que 5.
// let allNums = nums.filter( n => n > 5)
// console.log(allNums)
// 40. Muestra cada número multiplicado por 2.

// 41. Crea un nuevo array con cada número duplicado.
// let doble = nums.map( n => n * 2)
// console.log(doble)
// 42. Combina el array con otro array [20, 30].
let concated = nums.concat([20, 30])
console.log(concated)