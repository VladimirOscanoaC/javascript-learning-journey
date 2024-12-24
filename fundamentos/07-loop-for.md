# Bucle `for` en JavaScript

## 1. **Introducción**

El bucle `for` es una estructura de control que permite iterar un número determinado de veces. Es especialmente útil cuando se conoce de antemano cuántas iteraciones deben realizarse.

### Sintaxis

```javascript
for (inicialización; condición; actualización) {
  // Bloque de código a ejecutar
}
```

### Componentes del bucle `for`

1. **Inicialización**: Define una variable o su valor inicial antes de que comience el bucle. Este paso se ejecuta solo una vez.
2. **Condición**: Una expresión que se evalúa antes de cada iteración. Si es `true`, se ejecuta el bloque de código; si es `false`, el bucle termina.
3. **Actualización**: Una operación que se ejecuta al final de cada iteración. Suele modificar la variable inicializada para controlar el flujo del bucle.

## 2. **Ejemplo básico**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 0
// 1
// 2
// 3
// 4
```

### Explicación

- `let i = 0;` → Inicializa `i` con el valor `0`.
- `i < 5;` → El bucle se ejecuta mientras `i` sea menor que `5`.
- `i++` → Incrementa el valor de `i` en cada iteración.

## 3. **Variantes del bucle `for`**

### 3.1 **Bucle decreciente**

```javascript
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 5
// 4
// 3
// 2
// 1
```

### 3.2 **Saltar valores con pasos**

```javascript
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

// 0
// 2
// 4
// 6
// 8
```

### 3.3 **Uso con múltiples variables**

```javascript
for (let i = 0, j = 5; i < j; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
}

// i: 0, j: 5
// i: 1, j: 4
// i: 2, j: 3
```

## 4. **Uso del bucle `for` con arreglos**

El bucle `for` es ideal para recorrer arreglos de manera secuencial.

### Ejemplo: Iterar sobre un arreglo

```javascript
const frutas = ["Manzana", "Banana", "Cereza"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
// Manzana
// Banana
// Cereza
```

### Ejemplo: Encontrar un valor

```javascript
const numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 30) {
    console.log(`Encontrado en el índice ${i}`);
    break; // Detiene el bucle al encontrar el valor
  }
}

// Encontrado en el índice 2
```

## 5. **Control del flujo dentro del bucle**

### 5.1 `break`

La instrucción `break` detiene el bucle por completo.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// 0
// 1
// 2
// 3
// 4
```

### 5.2 `continue`

La instrucción `continue` salta a la siguiente iteración.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta los números pares
  }
  console.log(i);

  // 1
  // 3
  // 5
  // 7
  // 9
}
```

## 6. **Bucle `for` anidado**

Es posible incluir bucles `for` dentro de otros bucles. Esto se utiliza comúnmente para trabajar con matrices o realizar cálculos complejos.

### Ejemplo

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// i: 1, j: 1
// i: 1, j: 2
// i: 1, j: 3
// i: 2, j: 1
// i: 2, j: 2
// i: 2, j: 3
// i: 3, j: 1
// i: 3, j: 2
// i: 3, j: 3
```

## 7. **Bucle `for` en ES6: `for...of` y `for...in`**

### 7.1 `for...of`

Se utiliza para recorrer elementos de objetos iterables (como arreglos).

```javascript
const frutas = ["Manzana", "Banana", "Cereza"];

for (const fruta of frutas) {
  console.log(fruta);
}

// Manzana
// Banana
// Cereza
```

### 7.2 `for...in`

Se utiliza para recorrer las propiedades de un objeto.

```javascript
const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };

for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}

// nombre: Juan
// edad: 30
// ciudad: Madrid
```
