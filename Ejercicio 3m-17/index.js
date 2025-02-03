/* forEach realiza una iteracion con una funcion en cada uno de los elementos del array, su 
sintaxis es: arr.forEach(function(item, index, array) { }; item=elemento, index=indice, array=array xd

    unshift inserta contenido de cualquier tipo de dato al inicio de todo el array

    filter devuelve un nuevo array con todos los elementos encontrados segun la funcion que se le pase (va iterando en cada uno de los elementos del array)
su sintaxis es results = arr.filter(function(item, index, array) {}); function=asignacion de nombre de funcion, item=elemento, index=indice, array=array
en la busqueda de cada iteracion dependiendo de la condicion que se asigne en la funcion devolver el nuevo array con todos los elementos que coincidan con esa 
condicion y si no hay niguna coincidencia devolvera el nuevo array vacio

    slice devuelve un nuevo array de los elementos que determinemos, sintaxis (0, 1) empieza en 0 y termina en el indice antes de ese numero 

    splice es lo mismo que slice pero no devuelve un nuevo array solo lo modifica devolviendo el mismo siguiendo la misma sintaxis pero inciando desde 0 siendo el indice de 
donde se querra empezar y lo siguiente sera cuantos quiere borrar o si no quiere borrar dejandolo en 0 y depues de eso se puede insertar el dato que querramos 

    find itera en cada uno de los elementos del array en busca de la primera coincidencia que este determinada en la funcion y al encontrar una coincidencia 
parara la iteracion y mostrara el elemtento que cumple con la condicion, misma sintaxis que filter pero diferente funcionamiento 
*/

// Ejercicio 17. Muestra la posición que ocupa cada tenista
// let rankingTenis = ["Djokovic", "Alcaraz", "Medvedev", "Sinner"];

// rankingTenis.forEach((tenista, index) => {
//     console.log(`Posición ${index + 1}: ${tenista}`); //funcion integrada mediante el backstick
// });



/*salida del ejercicio es cada posicion de cada uno de los tenistas empezando por el 
index base (0) y es incrementado mas uno para empezar por el numero 1 y va agregando 
el nombre de cada tenista a continuacion 
*/

// Ejercicio 18: Agrega los meses faltantes del primer semestre
// let months = ["Enero", "Febrero", "Marzo"];

// months.unshift('septiembre', 'octumbre', 'noviembre', 'diciembre'); 

// console.log(months);
/* la salida de este ejercicio es solo agregando la inicio lo que se quiere poner 
ya sea un string, number o otro tipo de dato 
*/

// Ejercicio 19: Elimina los números negativos del array
// let numbers = [10, -5, 8, -3, 7, -1];

// let positiveNumbers = numbers.filter(number => number >= 0);

// console.log(positiveNumbers);

//la salida de este ejercicio es el resultado del filter, al si encontrar valores que cumplan con la 
//condicion que esta asignada esta retornando en el nuevo array esos resultados 

// Ejercicio 20: Verifica si la lista de invitados contiene a "Juan"
// let invitados = ["Ana", "Carlos", "Luis", "María"]; 
// let search = invitados.find(invitado => invitado === "Juan")
// console.log(search)

// Ejercicio 21: Extrae los tres primeros elementos del array de temperaturas
// let temperaturas = [23, 25, 20, 18, 30, 15];
// let firstTemps = temperaturas.slice(0, 3)
// console.log(firstTemps)

// Ejercicio 22: Reemplaza el elemento "perro" por "gato" en el array de mascotas
// let mascotas = ["perro", "conejo", "hamster", "loro", "perro"];
// mascotas.splice(0,1, 'gato')
// console.log(mascotas); // ["gato", "conejo", "hamster", "loro", "gato"]

// Ejercicio 23: Encuentra el primer número mayor que 50 en el array
// let edades = [25, 42, 60, 33, 50];
// let edadMayor50 = edades.find(edad => edad > 50);
// console.log(edadMayor50)

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
// let buscar=valoresNumericos.find(buscar => buscar ===100)
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
// console.log(nums.includes(4))
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
// nums.forEach(n => {
//     console.log(n * 2); // Muestra cada número multiplicado por 2
// });
// 41. Crea un nuevo array con cada número duplicado.
// let doble = nums.map( n => n * 2)
// console.log(doble)
// 42. Combina el array con otro array [20, 30].
// let concated = nums.concat([20, 30])
// console.log(concated)