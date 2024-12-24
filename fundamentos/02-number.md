# Operadores Aritméticos en JavaScript

En JavaScript, los operadores aritméticos son símbolos que se utilizan para realizar operaciones matemáticas con dos o más operandos. Estos operadores permiten realizar operaciones básicas como suma, resta, multiplicación, división y exponenciación, así como operaciones más avanzadas como el módulo y el incremento/decremento.

## Tipos de Operadores Aritméticos

### 1. Operadores Binarios

Los operadores binarios requieren dos operandos. Los operadores binarios en JavaScript son:

- **Suma (`+`)**: Realiza la adición de dos operandos.

  ```javascript
  let a = 5 + 3; // Resultado: 8
  ```

- **Resta (`-`)**: Realiza la resta entre dos operandos.

  ```javascript
  let b = 5 - 3; // Resultado: 2
  ```

- **Multiplicación (`*`)**: Realiza la multiplicación de dos operandos.

  ```javascript
  let c = 5 * 3; // Resultado: 15
  ```

- **División (`/`)**: Realiza la división entre dos operandos.

  ```javascript
  let d = 5 / 2; // Resultado: 2.5
  ```

- **Módulo (`%`)**: Devuelve el residuo de la división entre dos operandos.

  ```javascript
  let e = 5 % 2; // Resultado: 1
  ```

- **Exponenciación** (`**`): Realiza la operación de exponenciación entre dos operandos (base y exponente).

  ```javascript
  let f = 2 ** 3; // Resultado: 8
  ```

### 2. Operadores Unarios

Los operadores unarios requieren un solo operando. Algunos de los operadores unarios en JavaScript son:

- **Negación (`-`)**: Invierte el signo del operando.

  ```javascript
  let g = -5; // Resultado: -5
  ```

- **Incremento (`++`)**: Incrementa el valor de un operando en 1.

  ```javascript
  let h = 5;
  h++; // Resultado: 6
  ```

- **Decremento (`--`)**: Decrementa el valor de un operando en 1.

  ```javascript
  let i = 5;
  i--; // Resultado: 4
  ```

## Operaciones Avanzadas

### 1. **Operador `Math.pow()`**

La función `Math.pow()` se usa para calcular el valor de un número elevado a un exponente.

```javascript
let j = Math.pow(2, 3); // Resultado: 8
```

### 2. **Raíz Cuadrada (`Math.sqrt()`)**

La función `Math.sqrt()` devuelve la raíz cuadrada de un número.

```javascript
let k = Math.sqrt(16); // Resultado: 4
```

### 3. **Valor Absoluto (`Math.abs()`)**

La función `Math.abs()` devuelve el valor absoluto de un número (sin signo).

```javascript
let l = Math.abs(-5); // Resultado: 5
```

### 4. **Redondeo (`Math.round()`, `Math.floor()`, `Math.ceil()`)**

- **`Math.round()`** redondea un número al entero más cercano.

  ```javascript
  let m = Math.round(4.6); // Resultado: 5
  ```

- **`Math.floor()`** redondea un número hacia abajo al entero más cercano.

  ```javascript
  let n = Math.floor(4.6); // Resultado: 4
  ```

- **`Math.ceil()`** redondea un número hacia arriba al entero más cercano.

  ```javascript
  let o = Math.ceil(4.1); // Resultado: 5
  ```

### 5. Operador de Exponenciación con `Math.pow()` vs `**`

Si bien el operador de exponenciación (`**`) es más corto y conciso, también puedes usar `Math.pow()` para realizar la misma operación.

```javascript
let p = Math.pow(3, 2); // Resultado: 9
let q = 3 ** 2; // Resultado: 9
```

### 6. **Operaciones con Números Decimales**

En JavaScript, las operaciones con decimales pueden ser imprecisas debido a la representación interna de los números. Se pueden usar funciones como `toFixed()` para controlar la cantidad de decimales mostrados.

```javascript
let r = (0.1 + 0.2).toFixed(2); // Resultado: "0.30"
```

## Precedencia de Operadores

La precedencia de operadores determina el orden en que se evaluan las operaciones en una expresión. Los operadores con mayor precedencia se evalúan primero.

### Precedencia de operadores

1. **Exponentiación** (`**`)
2. **Incremento (`++`) y Decremento (`--`)**
3. **Multiplicación (`*`), División (`/`) y Módulo (`%`)**
4. **Suma (`+`) y Resta (`-`)**
5. **Negación (`-`)**

**Nota:** Para modificar la precedencia de operaciones, se pueden usar paréntesis `()`.
