## Tipos de Datos en JavaScript

En JavaScript, los **tipos de datos** se dividen en dos categorías principales: **primitivos** y **no primitivos (objetos)**.

### **1. Tipos de datos primitivos**

Son los tipos de datos más básicos y no se pueden dividir en partes más pequeñas. Incluyen:

- **Number**: Representa valores numéricos (enteros o decimales).

  ```javascript
  let edad = 25;
  let precio = 19.99;
  ```

- **String**: Representa texto o cadenas de caracteres.

  ```javascript
  let nombre = "Juan";
  let saludo = "Hola, mundo";
  ```

- **Boolean**: Representa valores lógicos: `true` o `false`.

  ```javascript
  let esMayor = true;
  let aprobado = false;
  ```

- **Undefined**: Indica que una variable se ha declarado pero no tiene un valor asignado.

  ```javascript
  let variable;
  console.log(variable); // undefined
  ```

- **Null**: Representa la ausencia intencional de un valor.

  ```javascript
  let vacio = null;
  ```

- **Symbol**: Representa un valor único e inmutable. Se usa principalmente para identificar propiedades de objetos de forma única.

  ```javascript
  const id = Symbol("id");
  ```

- **BigInt**: Permite representar números enteros muy grandes.

  ```javascript
  let numeroGrande = 9007199254740991n;
  ```

### **2. Tipos de datos no primitivos (Objetos)**

Los tipos de datos no primitivos son estructuras más complejas que pueden contener múltiples valores.

- **Object**: Un conjunto de pares clave-valor.

  ```javascript
  let persona = {
    nombre: "Ana",
    edad: 30,
  };
  console.log(persona.nombre); // Ana
  ```

- **Array**: Una lista ordenada de valores.

  ```javascript
  let frutas = ["manzana", "naranja", "plátano"];
  console.log(frutas[0]); // manzana
  ```

- **Function**: Un bloque de código reutilizable.

  ```javascript
  function saludar() {
    return "¡Hola!";
  }
  console.log(saludar()); // ¡Hola!
  ```

### **Resumen**

| Tipo de dato | Ejemplo                         |
| ------------ | ------------------------------- |
| Number       | `let edad = 25;`                |
| String       | `let nombre = "Juan";`          |
| Boolean      | `let esVerdadero = true;`       |
| Undefined    | `let x;`                        |
| Null         | `let y = null;`                 |
| Symbol       | `const id = Symbol("id");`      |
| BigInt       | `let num = 12345678901234567n;` |
| Object       | `let obj = { clave: "valor" };` |
| Array        | `let lista = [1, 2, 3];`        |
| Function     | `function test() { return 0; }` |
