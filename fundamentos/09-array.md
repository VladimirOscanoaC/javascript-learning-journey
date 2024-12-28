# Arrays en JavaScript

Los arrays son una de las estructuras de datos más fundamentales en JavaScript. Son esenciales para trabajar con colecciones de datos y realizar operaciones complejas de manera eficiente. Esta guía está organizada para ayudarte a comprender desde los conceptos básicos hasta temas avanzados, incluyendo sets y maps.

## Introducción a Arrays, Sets y Maps

### Arrays

Un array es una colección ordenada de elementos que pueden ser de cualquier tipo, como números, cadenas, objetos o incluso otros arrays. Los arrays en JavaScript son mutables y su tamaño puede cambiar dinámicamente.

```javascript
const numeros = [1, 2, 3, 4];
const mezclado = [1, "hola", true, { clave: "valor" }];
```

- **Índices**: Los elementos se acceden mediante índices, que comienzan en `0`.
- **Propiedad length**: Indica el número de elementos en el array.

```javascript
console.log(numeros.length); // 4
```

### Sets

Un `Set` es una colección de valores únicos, lo que significa que no permite elementos duplicados. Los sets son útiles cuando necesitas asegurarte de que cada elemento aparezca solo una vez.

```javascript
const conjunto = new Set([1, 2, 2, 3]); // Resultado: Set { 1, 2, 3 }
```

### Maps

Un `Map` es una colección de pares clave-valor, donde tanto las claves como los valores pueden ser de cualquier tipo. Los maps son ideales para almacenar datos con claves personalizadas.

```javascript
const mapa = new Map();
mapa.set("clave", "valor");
mapa.set(1, "uno");
console.log(mapa.get("clave")); // "valor"
```

## Mutabilidad e Inmutabilidad de Arrays

### Mutabilidad

Un array mutable permite modificar sus elementos directamente, ya sea agregando, eliminando o actualizando valores.

```javascript
const numeros = [1, 2, 3];
numeros[0] = 10; // El array ahora es [10, 2, 3]
```

### Inmutabilidad

La inmutabilidad implica crear nuevas copias del array para preservar el estado original.

```javascript
const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros, 4]; // [1, 2, 3, 4]
```

Trabajar de forma inmutable es útil para evitar efectos secundarios en funciones y estructuras de datos compartidas.

## Operaciones Básicas con Arrays

### Modificación del Final con `push` y `pop`

- **`push`**: Agrega uno o más elementos al final del array y devuelve su nueva longitud.

```javascript
const numeros = [1, 2, 3];
numeros.push(4); // [1, 2, 3, 4]
```

- **`pop`**: Elimina el último elemento del array y lo devuelve.

```javascript
const numeros = [1, 2, 3];
const ultimo = numeros.pop(); // [1, 2], ultimo = 3
```

### Modificación del Inicio con `unshift` y `shift`

- **`unshift`**: Agrega uno o más elementos al inicio del array.

```javascript
const numeros = [2, 3];
numeros.unshift(1); // [1, 2, 3]
```

- **`shift`**: Elimina el primer elemento del array y lo devuelve.

```javascript
const numeros = [1, 2, 3];
const primero = numeros.shift(); // [2, 3], primero = 1
```

## Iteración con Arrays

### `map`

Permite crear un nuevo array aplicando una función a cada elemento del array original.

```javascript
const numeros = [1, 2, 3];
const dobles = numeros.map((num) => num * 2); // [2, 4, 6]
```

### `forEach`

Ejecuta una función para cada elemento del array. A diferencia de `map`, no devuelve un nuevo array.

```javascript
const numeros = [1, 2, 3];
numeros.forEach((num) => console.log(num));
// Imprime: 1, 2, 3
```

### `for...of`

Permite iterar directamente sobre los valores del array.

```javascript
for (const num of numeros) {
  console.log(num);
}
```

## Filtrado y Transformación

### `filter`

Crea un nuevo array con los elementos que cumplen una condición.

```javascript
const numeros = [1, 2, 3, 4];
const pares = numeros.filter((num) => num % 2 === 0); // [2, 4]
```

### `reduce`

Acumula los elementos del array en un solo valor utilizando una función reductora.

```javascript
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0); // 10
```

### `some` y `every`

- **`some`**: Devuelve `true` si al menos un elemento cumple una condición.

```javascript
const numeros = [1, 2, 3];
const hayPares = numeros.some((num) => num % 2 === 0); // true
```

- **`every`**: Devuelve `true` si todos los elementos cumplen una condición.

```javascript
const todosPositivos = numeros.every((num) => num > 0); // true
```

## Búsqueda en Arrays

### `find`

Devuelve el primer elemento que cumple una condición.

```javascript
const numeros = [1, 2, 3, 4];
const par = numeros.find((num) => num % 2 === 0); // 2
```

### `findIndex`

Devuelve el índice del primer elemento que cumple una condición.

```javascript
const numeros = [1, 2, 3, 4];
const indice = numeros.findIndex((num) => num % 2 === 0); // 1
```

## Crear Copias y Manipular Arrays

### Crear Copias con `slice`

`slice` se utiliza para copiar una parte o la totalidad del array sin modificar el original.

```javascript
const numeros = [1, 2, 3, 4];
const copia = numeros.slice(1, 3); // [2, 3]
```

### Operador Spread

El operador spread (`...`) permite expandir los elementos de un array en un nuevo contexto.

#### Copiar un Array

```javascript
const numeros = [1, 2, 3];
const copia = [...numeros]; // [1, 2, 3]
```

#### Combinar Arrays

```javascript
const numeros1 = [1, 2];
const numeros2 = [3, 4];
const combinados = [...numeros1, ...numeros2]; // [1, 2, 3, 4]
```

## Temas Avanzados

### Ordenación con `sort`

Ordena los elementos de un array según una función de comparación.

```javascript
const numeros = [4, 2, 3, 1];
numeros.sort((a, b) => a - b); // [1, 2, 3, 4]
```

### Desestructuración

Permite extraer elementos de un array de forma sencilla.

```javascript
const numeros = [1, 2, 3];
const [primero, segundo] = numeros;
console.log(primero); // 1
```

### Arrays Multidimensionales

Son arrays que contienen otros arrays.

```javascript
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matriz[1][2]); // 6
```
