# Condicional `if` en JavaScript

El condicional `if` es una de las estructuras de control más importantes en JavaScript. Permite ejecutar bloques de código basándose en si una condición es verdadera o falsa.

## Sintaxis Básica

```javascript
if (condicion) {
  // Bloque de código a ejecutar si la condicion es verdadera
}
```

- **`condicion`:** Es una expresión que se evalúa como verdadera (`true`) o falsa (`false`).
- Si la condición es verdadera, el bloque de código dentro del `if` se ejecuta. Si es falsa, el programa salta ese bloque.

### Ejemplo Simple

```javascript
let edad = 20;
if (edad >= 18) {
  console.log("Eres mayor de edad");
}
```

En este caso, si la variable `edad` es mayor o igual a 18, se imprime el mensaje en la consola.

## Condicional `if-else`

Cuando necesitas manejar dos posibles caminos, puedes usar `else` para definir el bloque de código que se ejecuta cuando la condición es falsa.

```javascript
if (condicion) {
  // Bloque de código si la condicion es verdadera
} else {
  // Bloque de código si la condicion es falsa
}
```

### Ejemplo

```javascript
let hora = 10;
if (hora < 12) {
  console.log("Buenos días");
} else {
  console.log("Buenas tardes");
}
```

## Condicional `if-else if-else`

Cuando necesitas evaluar múltiples condiciones, puedes usar `else if`.

```javascript
if (condicion1) {
  // Bloque de código si la condicion1 es verdadera
} else if (condicion2) {
  // Bloque de código si la condicion2 es verdadera
} else {
  // Bloque de código si ninguna condicion es verdadera
}
```

### Ejemplo

```javascript
let nota = 85;
if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
```

## Buenas Prácticas

1. **Usa paréntesis claros:** Encierra siempre la condición en paréntesis para mejorar la legibilidad.
2. **Indentación adecuada:** Usa una buena indentación para que el código sea más fácil de leer.
3. **Evita condicionales redundantes:** Asegúrate de que las condiciones no se solapen innecesariamente.
4. **Usa `else` solo si es necesario:** Si no necesitas manejar el caso cuando la condición es falsa, no uses `else`.

## Casos Comunes de Uso

1. **Validación de datos:**

   ```javascript
   let contrasena = "12345";
   if (contrasena.length >= 8) {
     console.log("Contraseña válida");
   } else {
     console.log("Contraseña demasiado corta");
   }
   ```

2. **Flujo de ejecución basado en tiempo:**

   ```javascript
   let hora = new Date().getHours();
   if (hora < 12) {
     console.log("Buenos días");
   } else if (hora < 18) {
     console.log("Buenas tardes");
   } else {
     console.log("Buenas noches");
   }
   ```

3. **Decisiones anidadas:**
   A veces necesitas evaluar condiciones dentro de otras condiciones.

   ```javascript
   let usuario = "admin";
   let contrasena = "admin123";

   if (usuario === "admin") {
     if (contrasena === "admin123") {
       console.log("Acceso permitido");
     } else {
       console.log("Contraseña incorrecta");
     }
   } else {
     console.log("Usuario no reconocido");
   }
   ```

## Alternativa: Operador Ternario

Para condiciones simples, el operador ternario puede ser una alternativa compacta.

```javascript
let edad = 18;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);
```
