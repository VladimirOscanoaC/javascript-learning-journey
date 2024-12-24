# Ejercicios de `for` en JavaScript

A continuación, se presentan 20 ejercicios que utilizan el bucle `for`, ordenados de nivel básico a avanzado.

## Nivel Básico

### 1. Imprimir números del 1 al 10

Escribe un programa que use un bucle `for` para imprimir los números del 1 al 10 en la consola.

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### 2. Sumar números del 1 al 100

Usa un bucle `for` para calcular la suma de todos los números del 1 al 100 e imprime el resultado.

```javascript
let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma = suma + i;
}
console.log(suma);
```

### 3. Tabla de multiplicar

Escribe un programa que imprima la tabla de multiplicar del 5 (del 5 x 1 al 5 x 10).

```javascript
let numero = parseInt(prompt("Ingrese la tabla de que número quieres saber"));

for (let i = 1; i <= 10; i++) {
  tabla = numero * i;
  console.log(tabla);
}
```

### 4. Imprimir números pares

Crea un programa que imprima todos los números pares del 1 al 20.

```javascript
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
// Otra forma
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
```

### 5. Imprimir elementos de un array

Dado el array `["manzana", "banana", "cereza", "durazno"]`, usa un bucle `for` para imprimir cada elemento.

```javascript
let array = ["manzana", "banana", "cereza", "durazno"];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

## Nivel Intermedio

### 6. Contar números impares

Usa un bucle `for` para contar cuántos números impares hay entre 1 y 50.

```javascript
let contador = 0;
for (i = 1; i <= 50; i++) {
  if (i % 2 != 0) {
    contador += 1;
  }
}
console.log(contador);
```

### 7. Invertir un array

Dado el array `[1, 2, 3, 4, 5]`, usa un bucle `for` para invertirlo y mostrar el resultado.

```javascript
let array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}
```

### 8. Factorial de un número

Escribe un programa que calcule el factorial de un número dado, por ejemplo, 5! = 120.

```javascript
let num = parseInt(prompt("ingrese numero"));
let fact = 1;
for (i = 1; i <= num; i++) {
  fact = fact * i;
}
console.log(fact);
```

### 9. Sumar números en un array

Dado el array `[2, 4, 6, 8, 10]`, usa un bucle `for` para calcular la suma de sus elementos.

```javascript
let array = [2, 4, 6, 8, 10];
let sum = 0;
for (i = 0; i < array.length; i++) {
  sum = sum + array[i];
}
console.log(sum);
```

### 10. Imprimir una pirámide de asteriscos

Escribe un programa que imprima una pirámide de asteriscos de 5 niveles como esta:

```javascript
*
**
***
****
*****
```

```javascript
let niveles = 5; // Número de niveles de la pirámide

for (let i = 1; i <= niveles; i++) {
  let fila = ""; // Variable para almacenar la fila de asteriscos
  // Agregar espacios para centrar los asteriscos
  for (let j = 1; j <= niveles - i; j++) {
    fila += " ";
  }
  // Agregar los asteriscos
  for (let k = 1; k <= 2 * i - 1; k++) {
    fila += "⭐️";
  }
  console.log(fila); // Imprimir la fila de la pirámide
}
```

## Nivel Avanzado

### 11. Generar números primos

Escribe un programa que imprima todos los números primos entre 1 y 50.

```javascript
for (let num = 2; num <= 50; num++) {
  let esPrimo = true; // Suponemos que el número es primo
  for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
    if (num % divisor === 0) {
      esPrimo = false; // Si es divisible por otro número, no es primo
      break; // Salimos del bucle interno
    }
  }
  if (esPrimo) {
    console.log(num); // Imprimir si es primo
  }
}
```

### 12. Comprobar un array palíndromo

Usa un bucle `for` para verificar si el array `["a", "n", "a"]` es un palíndromo.

```javascript
let array = ["a", "n", "a"];
let esPalindromo = true;

for (let i = 0; i < array.length / 2; i++) {
  if (array[i] !== array[array.length - 1 - i]) {
    esPalindromo = false; // No es un palíndromo
    break; // Salimos del bucle si encontramos un desajuste
  }
}

if (esPalindromo) {
  console.log("El array es un palíndromo.");
} else {
  console.log("El array no es un palíndromo.");
}
```

### 13. Crear una matriz identidad

Escribe un programa que genere una matriz identidad de tamaño 3x3 usando bucles `for`.

```javascript
let matriz = []; // Matriz vacía

for (let i = 0; i < 3; i++) {
  let fila = []; // Fila vacía
  for (let j = 0; j < 3; j++) {
    if (i === j) {
      fila.push(1); // Agregar 1 en la diagonal principal
    } else {
      fila.push(0); // Agregar 0 en los demás lugares
    }
  }
  matriz.push(fila); // Agregar la fila a la matriz
}

// Imprimir la matriz
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i].join(" "));
}
```

### 14. Contar vocales en una cadena

Escribe un programa que cuente cuántas vocales hay en la cadena `"javascript es divertido"`.

```javascript
let texto = "javascript es divertido";
let contadorVocales = 0;
let vocales = "aeiou"; // Conjunto de vocales

for (let i = 0; i < texto.length; i++) {
  let caracter = texto[i].toLowerCase(); // Convertir el carácter a minúscula
  if (vocales.includes(caracter)) {
    // Verificar si es una vocal
    contadorVocales++;
  }
}

console.log(`El número de vocales en la cadena es: ${contadorVocales}`);
```

### 15. Imprimir números en espiral

Crea un programa que imprima los números del 1 al 16 en forma de espiral en una matriz 4x4.

```javascript

```

### 16. Buscar el número máximo

Dado el array `[45, 72, 18, 39, 56]`, usa un bucle `for` para encontrar el número máximo.

```javascript

```

### 17. Generar secuencia Fibonacci

Escribe un programa que imprima los primeros 10 números de la secuencia Fibonacci.

```javascript

```

### 18. Contar ocurrencias de un carácter

Dada la cadena `"hola mundo"`, usa un bucle `for` para contar cuántas veces aparece la letra `"o"`.

```javascript

```

### 19. Ordenar un array manualmente

Dado el array `[3, 1, 4, 1, 5]`, usa bucles `for` para ordenarlo de menor a mayor (sin usar funciones predefinidas).

```javascript

```

### 20. Validar un Sudoku

Escribe un programa que valide si una fila de Sudoku como `[5, 3, 4, 6, 7, 8, 9, 1, 2]` no tiene números repetidos, usando bucles `for`.

```javascript

```
