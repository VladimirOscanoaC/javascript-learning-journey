# Bucles en JavaScript: `while` y `do while`

## 1. **Introducción**

En JavaScript, los bucles son estructuras de control que permiten ejecutar un bloque de código de manera repetitiva bajo ciertas condiciones. Los bucles `while` y `do while` son dos tipos comunes que permiten iterar mientras se cumpla una condición. La diferencia principal entre ambos radica en el momento en que se evalúa la condición.

## 2. **Bucle `while`**

El bucle `while` repite un bloque de código mientras la condición especificada sea verdadera. Si la condición es falsa desde el principio, el bloque de código no se ejecutará ni una sola vez.

### Sintaxis:

```javascript
while (condición) {
  // Bloque de código a ejecutar
}
```

### Explicación:

- **condición**: Es una expresión que se evalúa antes de cada iteración. Si es `true`, el bucle se ejecuta; si es `false`, se termina el bucle.
- El bloque de código se ejecuta mientras la condición sea verdadera.

### Ejemplo:

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++; // Incrementa el valor de i
}

// 0
// 1
// 2
// 3
// 4
```

### Consideraciones:

- Asegúrate de que la condición eventualmente se convierta en `false`, de lo contrario, el bucle se ejecutará infinitamente.

## 3. **Bucle `do while`**

El bucle `do while` también repite un bloque de código mientras se cumpla una condición. Sin embargo, a diferencia del `while`, en el `do while` la condición se evalúa **después** de ejecutar el bloque de código, lo que garantiza que el código dentro del bucle se ejecute al menos una vez.

### Sintaxis:

```javascript
do {
  // Bloque de código a ejecutar
} while (condición);
```

### Explicación:

- El bloque de código dentro del `do` se ejecuta **una vez** antes de evaluar la condición.
- Después de ejecutar el bloque de código, se evalúa la condición. Si es `true`, el bloque se ejecuta nuevamente. Si es `false`, el bucle termina.

### Ejemplo:

```javascript
let i = 0;

do {
  console.log(i);
  i++; // Incrementa el valor de i
} while (i < 5);

// 0
// 1
// 2
// 3
// 4
```

### Consideraciones:

- Aunque la condición sea falsa desde el principio, el bloque de código se ejecutará una vez antes de que se termine el bucle.

## 4. **Comparación entre `while` y `do while`**

| Característica                 | `while`                                                                                   | `do while`                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Evaluación de la condición** | Antes de ejecutar el bloque de código                                                     | Después de ejecutar el bloque de código                                        |
| **Ejecuta el código**          | Solo si la condición es `true` al principio                                               | Siempre se ejecuta al menos una vez                                            |
| **Uso típico**                 | Cuando no se sabe cuántas veces se ejecutará el bucle antes de que se cumpla la condición | Cuando al menos una iteración es necesaria, independientemente de la condición |

## 5. **Casos comunes de uso**

- **Bucle `while`**: Se utiliza cuando no sabemos de antemano cuántas veces debe ejecutarse el bloque de código, y solo lo haremos mientras se cumpla la condición.

  Ejemplo: Leer datos de un usuario hasta que ingrese un valor válido.

- **Bucle `do while`**: Se utiliza cuando sabemos que al menos una vez debe ejecutarse el bloque de código, incluso si la condición es falsa al principio.

  Ejemplo: Mostrar un menú de opciones al usuario y esperar su selección.

## 6. **Consejos prácticos**

- Evita los bucles infinitos: asegúrate de que la condición cambiará en algún momento para que el bucle termine.
- Usa `break` y `continue` dentro de los bucles para controlar el flujo de ejecución:
  - `break`: sale del bucle inmediatamente.
  - `continue`: salta a la siguiente iteración del bucle.

### Ejemplo de `break`:

```javascript
let i = 0;

while (i < 10) {
  if (i === 5) {
    break; // Sale del bucle cuando i es igual a 5
  }
  console.log(i);
  i++;
}

// 0
// 1
// 2
// 3
// 4
```

### Ejemplo de `continue`:

```javascript
let i = 0;

while (i < 5) {
  i++;
  if (i === 3) {
    continue; // Salta la iteración cuando i es igual a 3
  }
  console.log(i);
}

// 1
// 2
// 4
// 5
```
