# Array en JavaScript

## 1. Introducción a los Arrays

Los arrays son una de las estructuras de datos que almacenan una coleccón de elementos ordenados como números, cadenas, objetos o incluso otros arrays. Los arrays en JavaScript son mutables y su tamaño puede cambiar dinámicamente.

### Características principales

1. **Indexación por Cero:** Los elementos de un array se numeran desde el índice 0.

   > Ejemplo:
   > En `[10, 20, 30]`, el primer elemento es `10` y está en el índice `0`.

2. **Tipos de Datos Mixtos:** Los arrays pueden almacenar valores de diferentes tipos (números, strings, booleanos, objetos, etc.).
   > Ejemplo:
   > `[42, "Hola", true, { clave: "valor" }]`.
3. **Propiedad length:** Proporciona la cantidad de elementos en el array.
   > Ejemplo:
   > En `[1, 2, 3]`, haciendo `array.length = 3`.
4. **Dinamismo:** Pueden cambiar de tamaño dinámicamente, añadiendo o eliminando elementos.
5. **Métodos Incorporados:** Los arrays tienen métodos útiles para manipulación, como `push`, `pop`, `map`, y más.

### Declaración y creación de arrays

1. **Forma Literal ( [ ] )**
   Es la forma más común y recomendada para crear arrays.

   ```javascript
   // Crear un array vacío
   let arrayVacio = [];

   // Crear un array con elementos
   let frutas = ["manzana", "naranja", "plátano"];
   console.log(frutas[0]); // "manzana"
   console.log(frutas.length); // 3
   ```

2. **Con el Constructor `new Array()`**

   Una forma alternativa, aunque menos utilizada.

   ```javascript
   // Crear un array vacío
   let arrayVacio = new Array();

   // Crear un array con elementos
   let numeros = new Array(1, 2, 3, 4);
   console.log(numeros[2]); // 3

   // Crear un array con un tamaño específico
   let arrayConTamaño = new Array(5); // Crea un array con 5 espacios vacíos
   console.log(arrayConTamaño.length); // 5
   ```

**Nota**: Usar `new Array(5)` puede ser confuso, ya que no crea un array con valores `undefined`, sino un array con "espacios vacíos".

### Diferencias entre Arrays y Objetos

| **Característica**       | **Array**                                                   | **Objeto**                                       |
| ------------------------ | ----------------------------------------------------------- | ------------------------------------------------ |
| **Estructura**           | Colección ordenada basada en índices numéricos.             | Colección desordenada basada en claves.          |
| **Acceso**               | Acceso por índice: `array[0]`.                              | Acceso por clave: `obj["clave"]` o `obj.clave`.  |
| **Propósito Principal**  | Listas de elementos.                                        | Representar entidades con propiedades y valores. |
| **Métodos Incorporados** | Métodos como `push`, `pop`, `map`, etc., para manipular.    | Métodos básicos como `Object.keys`.              |
| **Iteración**            | Ideal para iteraciones con bucles y métodos como `forEach`. | Menos optimizado para listas grandes.            |

Ejemplo de un array frente a un objeto:

```javascript
// Array
let frutas = ["manzana", "naranja", "plátano"];
console.log(frutas[1]); // "naranja"

// Objeto
let fruta = { nombre: "manzana", color: "rojo" };
console.log(fruta.color); // "rojo"
```

## 2. Propiedades Básicas de los Arrays

### Propiedad `length`

La propiedad `length` devuelve la cantidad de elementos en un array. Es una propiedad dinámica: se actualiza automáticamente cuando se agregan o eliminan elementos del array.

**Ejemplos:**

```javascript
let numeros = [10, 20, 30, 40];
console.log(numeros.length); // 4

// Modificar el tamaño del array
numeros.length = 2; // Reduce el array
console.log(numeros); // [10, 20]

numeros.length = 5; // Expande el array (los nuevos índices serán "vacíos")
console.log(numeros); // [10, 20, <3 vacíos>]
```

### Índices en los Arrays

Cada elemento en un array tiene un índice basado en su posición.

- Los índices comienzan en `0` (indexación por cero).
- Puedes acceder, modificar o eliminar elementos usando estos índices.

**Ejemplo:**

```javascript
let colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // "rojo"
console.log(colores[2]); // "azul"

// Modificar un elemento
colores[1] = "amarillo";
console.log(colores); // ["rojo", "amarillo", "azul"]

// Agregar un elemento en un índice específico
colores[3] = "violeta";
console.log(colores); // ["rojo", "amarillo", "azul", "violeta"]

// Acceder a un índice fuera de rango
console.log(colores[10]); // undefined
```

### Tipos de Datos que Pueden Almacenar

Los arrays en JavaScript pueden contener cualquier tipo de datos, incluso mezclados en el mismo array. Esto incluye:

- **Primitivos**: Números, cadenas, booleanos, `null`, `undefined`, `BigInt`, `Symbol`.
- **Referenciados**: Objetos, arrays, funciones, etc.

**Ejemplo:**

```javascript
let datosMixtos = [
  42,
  "Hola",
  true,
  null,
  undefined,
  { clave: "valor" },
  [1, 2, 3],
];
console.log(datosMixtos[5].clave); // "valor"
console.log(datosMixtos[6][1]); // 2
```

### Arrays Multidimensionales

Un array multidimensional es un array que contiene otros arrays como elementos. Los más comunes son los **arrays bidimensionales**, que se usan para representar matrices o tablas.

**Creación y Acceso:**

```javascript
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Acceder a elementos
console.log(matriz[0][1]); // 2 (fila 0, columna 1)
console.log(matriz[2][2]); // 9 (fila 2, columna 2)

// Modificar un elemento
matriz[1][1] = 50;
console.log(matriz[1]); // [4, 50, 6]
```

**Operaciones con Arrays Multidimensionales:**

```javascript
// Recorrer todos los elementos
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}

// Agregar una nueva fila
matriz.push([10, 11, 12]);
console.log(matriz);
```

**Ejemplo de Uso Práctico de Arrays Multidimensionales:**

Representar un tablero de juego (como el de Tic Tac Toe):

```javascript
let tablero = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];

console.log(tablero[1][2]); // "O" (fila 1, columna 2)
```

## 3. Métodos Básicos para Manipular Arrays

### Agregar y Eliminar Elementos

#### a) `push()` y `pop()`

- **`push()`**: Agrega uno o más elementos al **final** del array.
- **`pop()`**: Elimina el último elemento del array y lo devuelve.

**Ejemplo:**

```javascript
let numeros = [1, 2, 3];

// Agregar elementos al final
numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]

// Eliminar el último elemento
let eliminado = numeros.pop();
console.log(eliminado); // 5
console.log(numeros); // [1, 2, 3, 4]
```

#### b) `unshift()` y `shift()`

- **`unshift()`**: Agrega uno o más elementos al **inicio** del array.
- **`shift()`**: Elimina el primer elemento del array y lo devuelve.

**Ejemplo:**

```javascript
let frutas = ["manzana", "naranja"];

// Agregar elementos al inicio
frutas.unshift("plátano", "uva");
console.log(frutas); // ["plátano", "uva", "manzana", "naranja"]

// Eliminar el primer elemento
let eliminado = frutas.shift();
console.log(eliminado); // "plátano"
console.log(frutas); // ["uva", "manzana", "naranja"]
```

---

### Acceso y Modificación de Elementos

#### Uso de índices

- Puedes acceder a elementos usando su índice y modificarlos directamente.

**Ejemplo:**

```javascript
let colores = ["rojo", "verde", "azul"];

// Acceder
console.log(colores[1]); // "verde"

// Modificar
colores[1] = "amarillo";
console.log(colores); // ["rojo", "amarillo", "azul"]
```

#### Método `splice()`

- **`splice()`**: Permite agregar, eliminar o reemplazar elementos en una posición específica.

**Sintaxis:**

```javascript
array.splice(índice, cantidad, elementosOpcionales);
```

**Ejemplos:**

```javascript
let numeros = [1, 2, 3, 4, 5];

// Eliminar elementos
numeros.splice(1, 2); // Elimina 2 elementos desde el índice 1
console.log(numeros); // [1, 4, 5]

// Reemplazar elementos
numeros.splice(1, 1, 10, 20); // Reemplaza 1 elemento en el índice 1 con 10 y 20
console.log(numeros); // [1, 10, 20, 5]

// Insertar sin eliminar
numeros.splice(2, 0, 30);
console.log(numeros); // [1, 10, 30, 20, 5]
```

---

### Crear Copias y Subarrays

#### a) `slice()`

- **`slice()`**: Crea una copia de una porción del array sin modificar el original.
- **Sintaxis:** `array.slice(inicio, fin)`
  - `inicio`: Índice donde comienza la copia.
  - `fin`: Índice donde termina la copia (no incluido).

**Ejemplo:**

```javascript
let numeros = [1, 2, 3, 4, 5];

// Copiar desde el índice 1 hasta antes del índice 4
let subArray = numeros.slice(1, 4);
console.log(subArray); // [2, 3, 4]

// Copiar desde el índice 2 hasta el final
let copia = numeros.slice(2);
console.log(copia); // [3, 4, 5]

// Copiar todo el array
let copiaCompleta = numeros.slice();
console.log(copiaCompleta); // [1, 2, 3, 4, 5]
```

#### b) Operador Spread (...)

- **Spread**: Permite crear copias y combinar arrays de forma más concisa.

**Ejemplo:**

```javascript
let numeros = [1, 2, 3];
let copia = [...numeros]; // Crear una copia
console.log(copia); // [1, 2, 3]

// Combinar arrays
let nuevosNumeros = [...numeros, 4, 5, 6];
console.log(nuevosNumeros); // [1, 2, 3, 4, 5, 6]

// Duplicar y modificar elementos
let duplicados = [...numeros, ...numeros];
console.log(duplicados); // [1, 2, 3, 1, 2, 3]
```

## 4. Iterar sobre Arrays

Iterar sobre un array significa recorrer cada elemento del mismo para realizar una operación o analizar sus valores. Aquí tienes formas tradicionales y modernas de hacerlo.

### Uso de Bucles Tradicionales

#### a) `for`

El bucle `for` es una forma básica y flexible de iterar sobre los elementos de un array.

**Sintaxis:**

```javascript
for (let i = 0; i < array.length; i++) {
  // Operaciones con array[i]
}
```

**Ejemplo:**

```javascript
let numeros = [10, 20, 30, 40];

for (let i = 0; i < numeros.length; i++) {
  console.log(`Índice ${i}: ${numeros[i]}`);
}
// Salida:
// Índice 0: 10
// Índice 1: 20
// Índice 2: 30
// Índice 3: 40
```

#### b) `while`

El bucle `while` itera mientras se cumpla una condición.

**Ejemplo:**

```javascript
let numeros = [10, 20, 30, 40];
let i = 0;

while (i < numeros.length) {
  console.log(`Índice ${i}: ${numeros[i]}`);
  i++;
}
// Salida:
// Índice 0: 10
// Índice 1: 20
// Índice 2: 30
// Índice 3: 40
```

### Métodos Modernos para Iteración

#### a) `forEach()`

- **`forEach()`** es un método que recorre cada elemento de un array y ejecuta una función proporcionada.
- Es ideal para ejecutar una acción en cada elemento, pero **no retorna un nuevo array**.

**Sintaxis:**

```javascript
array.forEach((elemento, índice, array) => {
  // Operaciones con elemento
});
```

**Ejemplo:**

```javascript
let frutas = ["manzana", "naranja", "plátano"];

frutas.forEach((fruta, index) => {
  console.log(`Fruta en índice ${index}: ${fruta}`);
});
// Salida:
// Fruta en índice 0: manzana
// Fruta en índice 1: naranja
// Fruta en índice 2: plátano
```

**Nota:** No puedes usar `break` en `forEach()` para detener la iteración. Si necesitas esa funcionalidad, utiliza `for`.

#### b) `map()`

- **`map()`** es similar a `forEach()`, pero **retorna un nuevo array** con los resultados de aplicar una función a cada elemento.
- Es útil cuando quieres transformar los elementos de un array.

**Sintaxis:**

```javascript
let nuevoArray = array.map((elemento, índice, array) => {
  // Operaciones con elemento
  return nuevoElemento;
});
```

**Ejemplo:**

```javascript
let numeros = [1, 2, 3, 4];

// Crear un nuevo array multiplicando cada número por 2
let numerosDuplicados = numeros.map((numero) => numero * 2);
console.log(numerosDuplicados); // [2, 4, 6, 8]
```

**Otro Ejemplo:**

```javascript
let nombres = ["Ana", "Luis", "María"];

// Transformar cada nombre en un objeto
let nombresObj = nombres.map((nombre) => {
  return { nombre: nombre, longitud: nombre.length };
});
console.log(nombresObj);
// Salida:
// [
//   { nombre: "Ana", longitud: 3 },
//   { nombre: "Luis", longitud: 4 },
//   { nombre: "María", longitud: 5 }
// ]
```

### Comparación entre Métodos Tradicionales y Modernos

| **Método**      | **Usos Principales**                     | **Características**                   |
| --------------- | ---------------------------------------- | ------------------------------------- |
| **`for`**       | Iteraciones personalizadas.              | Más control, pero menos conciso.      |
| **`while`**     | Iteraciones con condiciones dinámicas.   | Flexible, pero puede ser menos claro. |
| **`forEach()`** | Realizar acciones en cada elemento.      | Más legible, no retorna nuevo array.  |
| **`map()`**     | Transformar elementos en un nuevo array. | Retorna un nuevo array transformado.  |

## 5. Métodos Avanzados de Arrays

### Búsqueda y Filtro

#### a) `find()`

- **Busca el primer elemento** en un array que cumpla con una condición específica.
- Retorna el elemento encontrado o `undefined` si no lo encuentra.

**Ejemplo:**

```javascript
let numeros = [5, 12, 8, 130, 44];

let mayor10 = numeros.find((num) => num > 10);
console.log(mayor10); // 12
```

---

##### **b) `filter()`**

- Retorna un **nuevo array** con todos los elementos que cumplan una condición.

**Ejemplo:**

```javascript
let numeros = [5, 12, 8, 130, 44];

let mayores10 = numeros.filter((num) => num > 10);
console.log(mayores10); // [12, 130, 44]
```

---

##### **c) `includes()`**

- Verifica si un array contiene un elemento específico.
- Retorna `true` o `false`.

**Ejemplo:**

```javascript
let frutas = ["manzana", "naranja", "plátano"];

console.log(frutas.includes("naranja")); // true
console.log(frutas.includes("uva")); // false
```

---

##### **d) `some()` y `every()`**

- **`some()`**: Verifica si **al menos un elemento** cumple con una condición.  
  Retorna `true` si encuentra un elemento que cumple la condición.
- **`every()`**: Verifica si **todos los elementos** cumplen con una condición.  
  Retorna `true` solo si todos los elementos cumplen.

**Ejemplo:**

```javascript
let numeros = [5, 12, 8, 130, 44];

// ¿Algún número mayor que 100?
console.log(numeros.some((num) => num > 100)); // true

// ¿Todos los números son mayores que 3?
console.log(numeros.every((num) => num > 3)); // true
```

---

#### **2. Orden y Transformación**

##### **a) `sort()`**

- Ordena los elementos de un array en su lugar.
- Por defecto, ordena como cadenas (alfabéticamente).

**Ejemplo de Ordenación Alfabética:**

```javascript
let frutas = ["manzana", "naranja", "plátano"];
frutas.sort();
console.log(frutas); // ["manzana", "naranja", "plátano"]
```

**Ejemplo de Ordenación Numérica:**

```javascript
let numeros = [40, 1, 5, 200];

// Orden ascendente
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 5, 40, 200]

// Orden descendente
numeros.sort((a, b) => b - a);
console.log(numeros); // [200, 40, 5, 1]
```

---

##### **b) `reverse()`**

- Invierte el orden de los elementos de un array.

**Ejemplo:**

```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros); // [5, 4, 3, 2, 1]
```

---

##### **c) `reduce()` y `reduceRight()`**

- **`reduce()`**: Aplica una función a un acumulador y cada elemento del array, de izquierda a derecha, para reducirlo a un único valor.
- **`reduceRight()`**: Igual que `reduce()`, pero de derecha a izquierda.

**Ejemplo con `reduce()`:**

```javascript
let numeros = [1, 2, 3, 4];

// Sumar todos los elementos
let suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
console.log(suma); // 10
```

**Ejemplo con `reduceRight()`:**

```javascript
let palabras = ["uno", "dos", "tres"];
let frase = palabras.reduceRight(
  (acumulador, actual) => acumulador + " " + actual
);
console.log(frase); // "tres dos uno"
```

---

#### **3. Conversión de Arrays**

##### **a) `join()`**

- Convierte los elementos de un array en un string, separados por un delimitador especificado.

**Ejemplo:**

```javascript
let palabras = ["Hola", "mundo", "JavaScript"];
let frase = palabras.join(" ");
console.log(frase); // "Hola mundo JavaScript"
```

##### **b) `toString()`**

- Convierte el array en un string, separando los elementos con comas.

**Ejemplo:**

```javascript
let numeros = [1, 2, 3, 4];
console.log(numeros.toString()); // "1,2,3,4"
```

### **Resumen de Métodos**

| **Método**      | **Propósito**                                                |
| --------------- | ------------------------------------------------------------ |
| `find()`        | Encuentra el primer elemento que cumple una condición.       |
| `filter()`      | Crea un nuevo array con elementos que cumplen una condición. |
| `includes()`    | Verifica si un elemento está presente en el array.           |
| `some()`        | Comprueba si al menos un elemento cumple una condición.      |
| `every()`       | Comprueba si todos los elementos cumplen una condición.      |
| `sort()`        | Ordena los elementos del array.                              |
| `reverse()`     | Invierte el orden de los elementos del array.                |
| `reduce()`      | Reduce los elementos del array a un único valor.             |
| `reduceRight()` | Igual que `reduce()`, pero de derecha a izquierda.           |
| `join()`        | Combina los elementos en un string con un delimitador.       |
| `toString()`    | Convierte el array en un string separado por comas.          |
