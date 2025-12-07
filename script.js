//## Números:


// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3)); 

//2. Escribe una función que tome dos números como argumentos y devuelva su resta.
 
function restar(a, b) {
    return a - b;
}

console.log(restar(10, 4));

//3. Escribe una función que tome dos números como argumentos y devuelva su producto.


function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(5, 3));
console.log(multiplicar(3, 3));


//4. Escribe una función que tome dos números como argumentos y devuelva su división.

function dividir(a, b) {
    return a / b;
}
 console.log(dividir(40, 5));
 console.log(dividir(36, 6))

//5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.

function potencia(base, exponente) {
  return base ** exponente; 
}
console.log(potencia(2, 3)); 
console.log(potencia(5, 2)); 



//## Letras:

//1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.

function concatenar(cadena1, cadena2, cadena3) {
  return cadena1 + cadena2 + cadena3;
}

console.log(concatenar("Estamos", "Todos", "Juntos")); 

//2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.

function longitud(cadena) {
  return cadena.length;
 }

  console.log(longitud("Estamos todos juntos"))


  function longitud(cadena) {
  let contador = 0;
  for (let caracter of cadena) {
    contador++;
  }
  return contador;
}

console.log(longitud("Estamos todos juntos"));


//3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

function enMayusculas(argumento) {
  return argumento.toUpperCase();
}

console.log(enMayusculas("Estamos todos juntos")); 

//4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.

function enMinusculas(argumento){
  return argumento.toLowerCase();
}

console.log(enMinusculas("EsTaMOS TOdoS JUNtOs"))

//5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.


function caracterEnPosicion(cadena, indice){
  return cadena.charAt(indice);
}
console.log(caracterEnPosicion("Estamos todos juntos", 3));


//## Arrays:

//1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.


function sumaArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]; 
  }
  return suma;
}
console.log(sumaArray([1, 2, 3, 4, 5])); // Devuelve 15



//2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.


function promedioArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.length;
}
console.log(promedioArray([10, 20, 30, 40])); 
 

//3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.

function ordenarAscendente(numeros) {
  return numeros.sort((a, b) => a - b);
}
console.log(ordenarAscendente([5, 2, 9, 1, 7])); 

//4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.

function mayoresQue(numeros, limite) {
  return numeros.filter(valor => valor > limite);
}

console.log(mayoresQue([23, 8, 19, 1, 5], 7)); 

//5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

function unirArrays(array1, array2) {
  let nuevoArray = [];

  for (let i = 0; i < array1.length; i++) {
    nuevoArray.push(array1[i]);
  }

  for (let j = 0; j < array2.length; j++) {
    nuevoArray.push(array2[j]);
  }
  return nuevoArray;
}

console.log(unirArrays([4, 15, 9], [2, 11, 6]));


//## Objetos literales:

//1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

function obtenerNombre(objeto) {
  return objeto.nombre;
}

const persona = { nombre: "Roberta", edad: 27 };
console.log(obtenerNombre(persona));

//2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

function actualizarEdad(objeto, nuevaEdad) {
  for (let clave in objeto) {
    if (clave === "edad") {
      objeto[clave] = nuevaEdad;
    }
  }
  return objeto;
}

const personi = { nombre: "Teresa", edad: 25 };

console.log(actualizarEdad(personi, 30));


//3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.


function agregarPropiedad(objeto, nombrePropiedad) {
  objeto[nombrePropiedad] = null; 
  return objeto;
}

const persone = { nombre: "Esmeralda", edad: 7 };

console.log(agregarPropiedad(persone, "direccion"));

//4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

function eliminarPropiedad(objeto, nombrePropiedad) {
  const nuevoObjeto = {}; 

  for (let clave in objeto) {
    if (clave !== nombrePropiedad) {
      nuevoObjeto[clave] = objeto[clave];
    }
  }

  return nuevoObjeto;
}

const persono = { nombre: "Roxana", edad: 15, direccion: "Calle 123" };
console.log(eliminarPropiedad(persono, "direccion"));

//5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

function contarPropiedades(objeto) {
  let contador = 0; 

  for (let clave in objeto) {
    contador++; // 
  }

  return contador; // 
}

// Ejemplo de uso:
const personea = { nombre: "María", edad: 30, ciudad: "Barcelona" };

console.log(contarPropiedades(personea));
// Devuelve 3