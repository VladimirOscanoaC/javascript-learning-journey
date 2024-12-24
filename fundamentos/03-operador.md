# Operadores en JavaScript

JavaScript ofrece una variedad de operadores para realizar tareas comunes en la programación, como asignaciones, comparaciones, aritmética y operaciones lógicas. A continuación se presenta un resumen general de los tipos de operadores disponibles:

## 1. Operadores de Asignación

Se utilizan para asignar valores a las variables.

- **Asignación simple (`=`):**

```javascript
let x = 10;
```

- **Asignación con operadores aritméticos:**

  - `+=` (suma y asigna):

  ```javascript
  x += 5; // x = x + 5
  ```

  - `-=` (resta y asigna):

  ```javascript
  x -= 3; // x = x - 3
  ```

  - Otros: `*=` (multiplica y asigna), `/=` (divide y asigna), `%=` (módulo y asigna).

## 2. Operadores de Comparación

Se utilizan para comparar dos valores.

- **Igualdad (`==`):** Compara valores, ignorando el tipo.
- **Igualdad estricta (`===`):** Compara valores y tipos.
- **Desigualdad (`!=`):** Comprueba si los valores son diferentes, ignorando el tipo.
- **Desigualdad estricta (`!==`):** Comprueba si los valores y tipos son diferentes.
- **Mayor que (`>`), Menor que (`<`), Mayor o igual (`>=`), Menor o igual (`<=`).**

```javascript
console.log(5 > 3); // true
console.log(5 === "5"); // false
```

## 3. Operadores Lógicos

Se utilizan para combinar o invertir condiciones lógicas.

- **AND (`&&`):** Devuelve `true` si ambas condiciones son verdaderas.

```javascript
console.log(true && false); // false
```

- **OR (`||`):** Devuelve `true` si al menos una de las condiciones es verdadera.

```javascript
console.log(true || false); // true
```

- **NOT (`!`):** Invierte el valor lógico.

```javascript
console.log(!true); // false
```

## 4. Operadores de Tipo

Sirven para comprobar o convertir tipos de datos.

- **`typeof`:** Devuelve el tipo de dato de una variable.

```javascript
console.log(typeof 42); // "number"
```

- **`instanceof`:** Comprueba si un objeto pertenece a una clase.

```javascript
console.log([] instanceof Array); // true
```

## 5. Operadores de Concatenación

Se utilizan para unir cadenas de texto.

- **Concatenación (`+`):**

```javascript
let saludo = "Hola" + " " + "Mundo"; // "Hola Mundo"
```

## 6. Operadores Condicionales (Ternarios)

Permiten tomar decisiones en una sola línea.

```javascript
let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);
```

## 7. Operadores Bit a Bit

Trabajan a nivel de bits y son menos comunes en el uso diario.

- AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), Desplazamiento a la izquierda (`<<`), Desplazamiento a la derecha (`>>`).

```javascript
console.log(5 & 1); // 1 (0101 & 0001 = 0001)
```
