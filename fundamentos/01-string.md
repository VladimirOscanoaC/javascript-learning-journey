# Strings en JavaScript

Las **cadenas de caracteres**, o **strings**, son un tipo de dato fundamental en **JavaScript** que representan **secuencias de caracteres** (texto). Se utilizan ampliamente para **almacenar** y **manipular** información textual.

## Creación de cadenas en JavaScript

Existen **dos formas principales** de crear cadenas de caracteres:

### 1. Literales de cadenas

Son la manera más común y sencilla de crear cadenas. Se utilizan **comillas simples** (`'`) o **comillas dobles** (`"`) para delimitar el texto.

```javascript
let saludo = "Hola, mundo";
let mensaje = "Este es un mensaje";
```

> No hay diferencia funcional entre usar comillas simples o dobles, pero se recomienda **consistencia** en su uso.

---

### 2. Plantillas de cadenas (Template Strings)

Las **plantillas de cadenas** son una característica moderna introducida en **ES6 (ECMAScript 2015)**. Se delimitan con **backticks** (`` ` ``) y permiten:

- **Interpolación de variables** usando `${}`.
- Escribir **cadenas multilínea** de forma más limpia.

```javascript
let nombre = "Vladimir";
let edad = 30;

let saludoPlantilla = `Hola, ${nombre}! Tienes ${edad} años.`;
console.log(saludoPlantilla);
// Salida: Hola, Vladimir! Tienes 30 años.
```

## Propiedades y métodos comunes de `strings`

Las cadenas de caracteres en JavaScript poseen varias **propiedades** y **métodos** integrados que facilitan su manipulación. Aquí se describen los más utilizados:

### 1. Propiedad: `length`

Devuelve la **longitud** de la cadena (número de caracteres).

```javascript
let texto = "JavaScript";
console.log(texto.length); // Salida: 10
```

### 2. Métodos comunes

| Método                       | Descripción                                                  | Ejemplo                                    |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| `charAt(index)`              | Devuelve el carácter en la posición indicada.                | `'Hola'.charAt(1)` → `'o'`                 |
| `charCodeAt(index)`          | Devuelve el código Unicode del carácter en esa posición.     | `'A'.charCodeAt(0)` → `65`                 |
| `toUpperCase()`              | Convierte todos los caracteres a mayúsculas.                 | `'hola'.toUpperCase()` → `'HOLA'`          |
| `toLowerCase()`              | Convierte todos los caracteres a minúsculas.                 | `'HOLA'.toLowerCase()` → `'hola'`          |
| `trim()`                     | Elimina los espacios en blanco al inicio y al final.         | `'  hola  '.trim()` → `'hola'`             |
| `slice(inicio, fin)`         | Extrae una parte de la cadena (sin incluir el índice `fin`). | `'JavaScript'.slice(0, 4)` → `'Java'`      |
| `replace(patron, reemplazo)` | Reemplaza una parte de la cadena según el patrón dado.       | `'Hola'.replace('H', 'h')` → `'hola'`      |
| `concat(otraCadena)`         | Une dos o más cadenas.                                       | `'Hola'.concat(' Mundo')` → `'Hola Mundo'` |
| `split(separador)`           | Divide la cadena en un arreglo según el separador indicado.  | `'a,b,c'.split(',')` → `['a', 'b', 'c']`   |

### Ejemplo práctico: Manipulación de cadenas

```javascript
let frase = "  Aprendiendo JavaScript es divertido!  ";

// Eliminar espacios al inicio y al final
let fraseLimpia = frase.trim();

// Convertir a mayúsculas
let fraseMayusculas = fraseLimpia.toUpperCase();

// Extraer una parte de la cadena
let parte = fraseLimpia.slice(0, 10);

console.log(fraseLimpia); // "Aprendiendo JavaScript es divertido!"
console.log(fraseMayusculas); // "APRENDIENDO JAVASCRIPT ES DIVERTIDO!"
console.log(parte); // "Aprendiendo"
```

## Notas adicionales

1. **Inmutabilidad de las cadenas**:  
   Las cadenas en JavaScript son **inmutables**, es decir, una vez creadas no se pueden modificar. Los métodos de manipulación devuelven **nuevas cadenas** sin cambiar la original.

2. **Caracteres especiales**:  
   Para incluir ciertos caracteres especiales dentro de un string, se usa el **carácter de escape** (`\`):

   | Secuencia | Descripción         |
   | --------- | ------------------- |
   | `\n`      | Nueva línea         |
   | `\t`      | Tabulación          |
   | `\\`      | Barra invertida `\` |
   | `\"`      | Comilla doble       |
   | `\'`      | Comilla simple      |

```javascript
let texto = "Esto es una línea\nY aquí hay otra.";
console.log(texto);
/* Salida:
Esto es una línea
Y aquí hay otra.
*/
```
