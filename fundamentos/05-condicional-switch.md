# Condicional `switch` en JavaScript

La sentencia `switch` en JavaScript se utiliza para ejecutar diferentes bloques de código en función del valor de una expresión. Es una alternativa más clara y organizada que usar varias sentencias `if...else if` cuando se necesita evaluar muchas condiciones relacionadas.

## Sintaxis básica

```javascript
switch (expresión) {
  case valor1:
    // Bloque de código si expresión === valor1
    break;
  case valor2:
    // Bloque de código si expresión === valor2
    break;
  default:
  // Bloque de código si no se cumple ningún caso
}
```

### Elementos clave:

- **`expresión`**: Es el valor que se compara con los casos.
- **`case`**: Define un posible valor para comparar con la expresión.
- **`break`**: Finaliza la ejecución del bloque actual y evita que se sigan ejecutando otros casos.
- **`default`** _(opcional)_: Bloque que se ejecuta si ninguno de los casos coincide.

## Ejemplo sencillo

```javascript
const fruta = "manzana";

switch (fruta) {
  case "manzana":
    console.log("Es una manzana.");
    break;
  case "banana":
    console.log("Es una banana.");
    break;
  case "naranja":
    console.log("Es una naranja.");
    break;
  default:
    console.log("Fruta no reconocida.");
}
```

### Salida:

```
Es una manzana.
```

## Características importantes

### 1. Uso del `break`

- La sentencia `break` es crucial para evitar la ejecución de casos posteriores.
- Sin `break`, el flujo continuará ejecutándose en los casos siguientes (comportamiento conocido como **fallthrough**).

#### Ejemplo sin `break`:

```javascript
const numero = 1;

switch (numero) {
  case 1:
    console.log("Uno");
  case 2:
    console.log("Dos");
  default:
    console.log("Otro número");
}
```

### Salida:

```
Uno
Dos
Otro número
```

### 2. El bloque `default`

- Es opcional pero útil para manejar valores no especificados en los casos.
- Se ejecuta si ningún caso coincide con la expresión.

#### Ejemplo:

```javascript
const color = "morado";

switch (color) {
  case "rojo":
    console.log("El color es rojo.");
    break;
  case "azul":
    console.log("El color es azul.");
    break;
  default:
    console.log("Color no reconocido.");
}
```

### Salida:

```
Color no reconocido.
```

## Comparación estricta

- La sentencia `switch` usa comparación estricta (`===`).
- Esto significa que el tipo de datos también debe coincidir.

#### Ejemplo:

```javascript
const valor = "1";

switch (valor) {
  case 1:
    console.log("Número 1");
    break;
  case "1":
    console.log("Cadena 1");
    break;
}
```

### Salida:

```
Cadena 1
```

## Caso con múltiples valores

- Puedes agrupar varios `case` para ejecutar el mismo bloque de código.

#### Ejemplo:

```javascript
const dia = "sabado";

switch (dia) {
  case "lunes":
  case "martes":
  case "miercoles":
  case "jueves":
  case "viernes":
    console.log("Es un día laborable.");
    break;
  case "sabado":
  case "domingo":
    console.log("Es fin de semana.");
    break;
}
```

### Salida:

```
Es fin de semana.
```

## Buenas prácticas

1. **Usar el `default`**:
   Siempre incluye un bloque `default` para manejar casos no previstos.

2. **Agregar `break` en cada caso**:
   Evita errores inesperados al olvidar detener la ejecución.

3. **Evitar bloques muy grandes**:
   Si hay demasiados casos, considera usar objetos o mapas para simplificar.

4. **Usar constantes**:
   Define valores constantes para evitar errores tipográficos y mejorar la legibilidad.

#### Ejemplo con constantes:

```javascript
const ROJO = "rojo";
const AZUL = "azul";

const color = "rojo";

switch (color) {
  case ROJO:
    console.log("El color es rojo.");
    break;
  case AZUL:
    console.log("El color es azul.");
    break;
  default:
    console.log("Color no reconocido.");
}
```

## Alternativa: Uso de objetos

En algunos casos, los objetos pueden ser una alternativa más eficiente.

#### Ejemplo:

```javascript
const acciones = {
  manzana: () => console.log("Es una manzana."),
  banana: () => console.log("Es una banana."),
  naranja: () => console.log("Es una naranja."),
};

const fruta = "manzana";
(acciones[fruta] || (() => console.log("Fruta no reconocida.")))();
```

### Salida:

```
Es una manzana.
```
