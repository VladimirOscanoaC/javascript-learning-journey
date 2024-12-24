# Funciones en JavaScript

Las funciones son bloques de código reutilizables que permiten encapsular lógica y ejecutarla cuando sea necesario. En este documento se explorará la anatomía de una función, sus diferentes tipos y conceptos relacionados con mayor profundidad.

## Anatomía de una Función

Una función en JavaScript tiene la siguiente estructura básica:

```javascript
function nombreDeLaFuncion(param1, param2) {
  // Cuerpo de la función
  return param1 + param2;
}
```

### Componentes

1. **Palabra clave `function`**: Indica que se está definiendo una función. Es obligatoria para declarar una función tradicional.
2. **Nombre de la función**: Es opcional, pero útil para identificar la función, especialmente al depurar. De preferencia escribir en **_camelCase_**.
3. **Parámetros**: Variables que actúan como entradas para la función. Pueden ser cero, uno o varios. Si se envían menos argumentos de los esperados, los parámetros faltantes se inicializan como `undefined`.
4. **Cuerpo**: Bloque de código encerrado entre llaves `{}` que define la lógica que ejecutará la función.
5. **`return`**: Palabra clave que finaliza la ejecución de la función y devuelve un valor. Si no se incluye, la función devolverá `undefined` de manera predeterminada.

Ejemplo avanzado:

```javascript
function calcularArea(base, altura) {
  if (base <= 0 || altura <= 0) {
    return "Los valores deben ser mayores a 0";
  }
  return 0.5 * base * altura;
}
```

## Funciones vs Métodos

Aunque tanto las funciones como los métodos son bloques de código ejecutables, difieren en su contexto y propósito:

## Funciones

- Son independientes del contexto de un objeto.
- Se definen en el ámbito global o local (dentro de otra función o bloque).
- Su comportamiento no depende del estado de ningún objeto.

Ejemplo realista:

```javascript
function calcularImpuestos(precio, tasa) {
  return precio * (tasa / 100);
}

const precioProducto = 100;
const tasaIVA = 21;
console.log(`El IVA es: ${calcularImpuestos(precioProducto, tasaIVA)}`); // "El IVA es: 21"
```

## Métodos

- Están asociados a un objeto y suelen operar sobre las propiedades de ese objeto.
- Utilizan `this` para acceder al estado interno del objeto.

Ejemplo realista:

```javascript
// carrito --> objeto
const carrito = {
  // productos --> array de objetos
  productos: [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
  ],
  // calcularTotal -->
  calcularTotal() {
    return this.productos.reduce(
      (total, producto) => total + producto.precio,
      0
    );
  },
  // agregarProductos --> metodo
  agregarProducto(nombre, precio) {
    this.productos.push({ nombre, precio });
  },
};

console.log(`Total inicial: ${carrito.calcularTotal()}`); // "Total inicial: 50"
carrito.agregarProducto("Zapatos", 50);
console.log(`Total final: ${carrito.calcularTotal()}`); // "Total final: 100"
```

### Explicación del codigo

Claro, vamos a desglosar y explicar el código pieza por pieza:

#### **Definición del objeto `carrito`**

El objeto `carrito` contiene:

1. **Propiedad `productos`**:

   - Es un array de objetos. Cada objeto representa un producto con las propiedades:
     - `nombre`: El nombre del producto (como `"Camiseta"` y `"Pantalón"`).
     - `precio`: El precio del producto (como `20` y `30`).

2. **Método `calcularTotal()`**:

   - Calcula el precio total de los productos en el carrito.
   - Usa el método `.reduce()` para iterar sobre el array `productos` y acumular los precios:
     - `total`: Es el acumulador que empieza en `0`.
     - `producto`: Representa cada elemento del array.
   - Devuelve el total acumulado.

3. **Método `agregarProducto(nombre, precio)`**:
   - Permite añadir un nuevo producto al array `productos`.
   - Recibe dos parámetros: el `nombre` y el `precio` del producto a agregar.
   - Usa el método `.push()` para insertar un nuevo objeto en el array `productos`.

#### **Ejecución del código**

1. Calcular el total inicial

```javascript
console.log(`Total inicial: ${carrito.calcularTotal()}`); // "Total inicial: 50"
```

- **Llamada a `calcularTotal`**

  - El método recorre el array `productos`:
    - Iteración 1: Suma el precio de `"Camiseta"` (20) al acumulador (`0 + 20 = 20`).
    - Iteración 2: Suma el precio de `"Pantalón"` (30) al acumulador (`20 + 30 = 50`).
  - Devuelve `50`, que se imprime como "Total inicial: 50".

2. Agregar un nuevo producto

```javascript
carrito.agregarProducto("Zapatos", 50);
```

- **Llamada a `agregarProducto`**

  - Inserta un nuevo objeto `{ nombre: "Zapatos", precio: 50 }` en el array `productos`.

Ahora, el array `productos` tiene tres elementos:

```javascript
[
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];
```

3. Calcular el total final

```javascript
console.log(`Total final: ${carrito.calcularTotal()}`); // "Total final: 100"
```

- **Llamada a `calcularTotal`** nuevamente:
  - Ahora recorre el array actualizado con tres elementos:
    - Iteración 1: Suma el precio de `"Camiseta"` (20) al acumulador (`0 + 20 = 20`).
    - Iteración 2: Suma el precio de `"Pantalón"` (30) al acumulador (`20 + 30 = 50`).
    - Iteración 3: Suma el precio de `"Zapatos"` (50) al acumulador (`50 + 50 = 100`).
  - Devuelve `100`, que se imprime como "Total final: 100".

## Diferencias clave entre funciones y métodos

1. **Contexto**: Las funciones son independientes, mientras que los métodos operan dentro del contexto de un objeto.
2. **Uso de `this`**: Los métodos dependen de `this` para acceder a las propiedades del objeto.
3. **Propósito**: Los métodos encapsulan comportamientos específicos relacionados con un objeto, mientras que las funciones suelen ser más generales.

## Funciones Puras e Impuras

### Funciones Puras

- Son deterministas: el mismo conjunto de entradas siempre produce la misma salida.
- No tienen efectos secundarios, como modificar variables externas o interactuar con el sistema.

Ejemplo:

```javascript
function convertirAMayusculas(texto) {
  return texto.toUpperCase();
}
console.log(convertirAMayusculas("hola")); // "HOLA"
```

### Funciones Impuras

- No garantizan el mismo resultado con las mismas entradas.
- Pueden modificar el estado externo o interactuar con recursos externos, como una base de datos o el DOM.

Ejemplo:

```javascript
let contador = 0;
function incrementarContador() {
  contador++;
  return contador;
}
console.log(incrementarContador()); // 1
console.log(incrementarContador()); // 2
```

Las funciones impuras son inevitables en ciertos contextos, como manejar eventos o trabajar con datos externos.

## Arrow Functions y Enlace Léxico

### Arrow Functions

Las funciones flecha son una forma compacta de declarar funciones. Se introdujeron en ES6 y tienen diferencias importantes con las funciones tradicionales:

```javascript
const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // 8
```

#### Características

1. **Sintaxis Concisa**: Si el cuerpo tiene una sola línea y devuelve un valor, no es necesario usar llaves `{}` ni la palabra clave `return`.
2. **Sin `this` Propio**: Las funciones flecha no tienen su propio `this`, sino que heredan el valor de `this` del contexto en el que se definieron.
3. **No se pueden usar como constructores**: No admiten el uso de `new`.

Ejemplo avanzado:

```javascript
const persona = {
  nombre: "Vladimir",
  saludar: () => `Hola, soy ${this.nombre}`, // Error: `this` no apunta al objeto persona
};
console.log(persona.saludar()); // "Hola, soy undefined"
```

### Enlace Léxico

El enlace léxico define cómo las funciones flecha determinan el valor de `this`. Este valor está ligado al lugar donde se declara la función, no donde se invoca.

```javascript
function crearObjeto() {
  return {
    valor: 42,
    metodo: () => this.valor,
  };
}
const obj = crearObjeto.call({ valor: 100 });
console.log(obj.metodo()); // undefined, porque `this` apunta al contexto léxico original
```

## Contextos de Ejecución y Scope Chain

### Contexto de Ejecución

El contexto de ejecución es el entorno donde se ejecuta el código y determina cómo se accede a las variables y funciones.

1. **Global**: Variables y funciones definidas fuera de cualquier bloque o función.
2. **Función**: Crea un nuevo contexto para las variables y funciones locales.
3. **Eval y Módulos**: Eval crea un contexto dinámico, mientras que los módulos tienen su propio contexto de ejecución.

```javascript
const globalVar = "global";
function mostrarContexto() {
  const localVar = "local";
  console.log(globalVar); // "global"
  console.log(localVar); // "local"
}
mostrarContexto();
```

### Scope Chain

La scope chain conecta el ámbito actual con los ámbitos externos, permitiendo acceder a variables definidas fuera del contexto inmediato.

```javascript
const globalVar = "global";
function externa() {
  const externaVar = "externa";
  function interna() {
    const internaVar = "interna";
    console.log(globalVar, externaVar, internaVar);
  }
  interna();
}
externa(); // "global externa interna"
```

## Closure

Un **closure** ocurre cuando una función "recuerda" el entorno en el que fue creada, incluso después de que ese entorno haya finalizado. Es una de las características más poderosas de JavaScript.

### Ejemplo Básico

```javascript
function crearContador() {
  let contador = 0;
  return function incrementar() {
    contador++;
    return contador;
  };
}

const contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2
```

### Ejemplo Avanzado

Los closures son útiles para encapsular lógica y crear funciones con estado privado:

```javascript
function crearSaludo(prefijo) {
  return function (nombre) {
    return `${prefijo}, ${nombre}!`;
  };
}

const saludarEnEspañol = crearSaludo("Hola");
const saludarEnIngles = crearSaludo("Hello");

console.log(saludarEnEspañol("Vladimir")); // "Hola, Vladimir!"
console.log(saludarEnIngles("Vladimir")); // "Hello, Vladimir!"
```

Los closures son esenciales en programación funcional y permiten implementar conceptos como currying y memoización.
