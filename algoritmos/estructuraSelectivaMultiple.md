# Ejercicios de Estructura Selectiva Simple y Doble

**Prob 01** - Al ingresar un número entre 1 y 4 devolver la estación del año de acuerdo a la siguiente tabla.

| Número | Estación  |
| ------ | --------- |
| 1      | Verano    |
| 2      | Otoño     |
| 3      | Invierno  |
| 4      | Primavera |

```javascript
let opcion = parseInt(prompt("Ingresa un opción del 1 al 4"));
let cadena;

switch (opcion) {
  case 1:
    cadena = "Verano";
    console.log(cadena);
    break;
  case 2:
    cadena = "Otoño";
    console.log(cadena);
    break;
  case 3:
    cadena = "Invierno";
    console.log(cadena);
    break;
  case 4:
    cadena = "Primavera";
    console.log(cadena);
    break;
  default:
    console.log("No seleccionaste la opcion correcta");
}
```

**Prob 02** - Dado un número entero de un digito (0 al 9), devolver el número en letras.

```javascript
let opcion = parseInt(prompt("Ingresa un número del 1 al 9"));
let cadena;

switch (opcion) {
  case 1:
    cadena = "UNO";
    console.log(cadena);
    break;
  case 2:
    cadena = "DOS";
    console.log(cadena);
    break;
  case 3:
    cadena = "TRES";
    console.log(cadena);
    break;
  case 4:
    cadena = "CUATRO";
    console.log(cadena);
    break;
  case 5:
    cadena = "CINCO";
    console.log(cadena);
    break;
  case 6:
    cadena = "SEIS";
    console.log(cadena);
    break;
  case 7:
    cadena = "SIETE";
    console.log(cadena);
    break;
  case 8:
    cadena = "OCHO";
    console.log(cadena);
    break;
  case 9:
    cadena = "NUEVE";
    console.log(cadena);
    break;
  default:
    console.log("No seleccionaste la opcion correcta");
}
```

**Prob 03** - Dado dos números enteros y un operador `+`, `-`, `*` y `/`, devolver la operación de los dos números segun el operador ingresado, considere que si el seguno número es cero y el operador es `/`, no es divisible con el primer número, entonces devolver como resultado 0.

```javascript
let num1 = parseFloat(prompt("Ingresa primer número"));
let num2 = parseFloat(prompt("Ingresa segundo número"));

let opcion = prompt("Ingresa un operador (+, -, *, /)");

switch (opcion) {
  case "+":
    alert(num1 + num2);
    break;
  case "-":
    alert(num1 - num2);
    break;
  case "*":
    alert(num1 * num2);
    break;
  case "/":
    alert(num2 === 0 ? 0 : num1 / num2); // División por cero
    break;
  default:
    alert("Operador no válido");
}

// num2 === 0 ? 0 : num1 / num2
// Equivale a ⬇️
// if (num2 === 0) {
//   resultado = 0;
// } else {
//   resultado = num1 / num2;
// }
```

**Prob 04** - Dado una letra determinar si es una vocal.

```javascript
let letra = prompt("Ingresa una letra:").toLowerCase();

switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    alert("Es una vocal");
    break;
  default:
    alert("No es una vocal");
}
```

**Prob 05** - Al ingresar el número de un mes, devolver la estación del año de acuerdo a la siguiente tabla.

| Mes      | Estación  |
| -------- | --------- |
| 1,2,3    | Verano    |
| 4,5,6    | Otoño     |
| 7,8,9    | Invierno  |
| 10,11,12 | Primavera |

```javascript
let mes = parseInt(prompt("Ingresa el número del mes (1-12):"));

switch (true) {
  case mes >= 1 && mes <= 3:
    alert("Verano");
    break;
  case mes >= 4 && mes <= 6:
    alert("Otoño");
    break;
  case mes >= 7 && mes <= 9:
    alert("Invierno");
    break;
  case mes >= 10 && mes <= 12:
    alert("Primavera");
    break;
  default:
    alert("Mes inválido");
}
```

**Prob 06** - Dado la nota promedio de un alumno, obtener la categoría, según la siguiente tabla.

| Promedio      | Categoría |
| ------------- | --------- |
| Entre 0 y 5   | Pésimo    |
| Entre 6 y 10  | Malo      |
| Entre 11 y 14 | Regular   |
| Entre 15 y 17 | Bueno     |
| Entre 18 y 20 | Excelente |

```javascript
let promedio = parseFloat(prompt("Ingresa el promedio del alumno:"));

switch (true) {
  case promedio >= 0 && promedio <= 5:
    alert("Pésimo");
    break;
  case promedio >= 6 && promedio <= 10:
    alert("Malo");
    break;
  case promedio >= 11 && promedio <= 14:
    alert("Regular");
    break;
  case promedio >= 15 && promedio <= 17:
    alert("Bueno");
    break;
  case promedio >= 18 && promedio <= 20:
    alert("Excelente");
    break;
  default:
    alert("Promedio inválido");
}
```

**Prob 07** - Al ingresar al día y el número de un mes, devolver la estación del año de acuerdo a la siguiente tabla.

| Promedio  | Categoría                               |
| --------- | --------------------------------------- |
| Verano    | Del 21 de Diciembre al 20 de Marzo      |
| Otoño     | Del 21 de Marzo al 21 de Junio          |
| Invierno  | Del 22 de Junio al 22 de Septiembre     |
| Primavera | Del 23 de Septiembre al 20 de Diciembre |

```javascript
let dia = parseInt(prompt("Ingresa el día:"));
let mes = parseInt(prompt("Ingresa el número del mes (1-12):"));

switch (true) {
  case (mes === 12 && dia >= 21) || (mes <= 3 && dia <= 20):
    alert("Verano");
    break;
  case (mes === 3 && dia >= 21) || (mes <= 6 && dia <= 20):
    alert("Otoño");
    break;
  case (mes === 6 && dia >= 22) || (mes <= 9 && dia <= 22):
    alert("Invierno");
    break;
  case (mes === 9 && dia >= 23) || (mes <= 12 && dia <= 20):
    alert("Primavera");
    break;
  default:
    alert("Fecha inválida");
}
```

**Prob 08** - En una universidad se ha establecido los siguientes puntajes de ingreso a sus respectivas facultades.

| Promedio       | Categoría |
| -------------- | --------- |
| Sistemas       | 100       |
| Electrónica    | 90        |
| Industrial     | 80        |
| Administración | 70        |

```javascript
let puntaje = parseInt(prompt("Ingresa tu puntaje:"));

switch (true) {
  case puntaje >= 100:
    alert("Facultad de Sistemas");
    break;
  case puntaje >= 90:
    alert("Facultad de Electrónica");
    break;
  case puntaje >= 80:
    alert("Facultad Industrial");
    break;
  case puntaje >= 70:
    alert("Facultad de Administración");
    break;
  default:
    alert("No califica para ninguna facultad");
}
```

**Prob 09** - Determine el importe a pagar para el examen de admisión de una universidad, cuyo valor depende de nivel socioeconómico y el colegio de procedencia.

| Rango de Edad | Nivel Social A | Nivel Social B | Nivel Social C |
| ------------- | -------------- | -------------- | -------------- |
| Nacional      | 300            | 200            | 100            |
| Particula     | 400            | 300            | 200            |

```javascript
let nivelSocial = prompt("Ingresa tu nivel social (A, B, C):").toUpperCase();
let colegio = prompt(
  "Ingresa tu tipo de colegio (Nacional/Particula):"
).toLowerCase();

switch (colegio) {
  case "nacional":
    switch (nivelSocial) {
      case "A":
        alert("El importe es 300");
        break;
      case "B":
        alert("El importe es 200");
        break;
      case "C":
        alert("El importe es 100");
        break;
      default:
        alert("Nivel social no válido");
    }
    break;
  case "particula":
    switch (nivelSocial) {
      case "A":
        alert("El importe es 400");
        break;
      case "B":
        alert("El importe es 300");
        break;
      case "C":
        alert("El importe es 200");
        break;
      default:
        alert("Nivel social no válido");
    }
    break;
  default:
    alert("Tipo de colegio no válido");
}
```

**Prob 10** - Dado el número del mes y el año (cuatro digitos) de una fecha, determinar que mes es en letras y cuantos días tiene, considerar que febrero tiene 28 o 29 dias si el año es bisiesto, un año es bisiesto si es múltiplo de 4, pero no de 100 y si de 400.

```javascript
let mes = parseInt(prompt("Ingresa el número del mes (1-12):"));
let año = parseInt(prompt("Ingresa el año (4 dígitos):"));

let dias;

switch (mes) {
  case 1:
    alert("Enero");
    dias = 31;
    break;
  case 2:
    alert("Febrero");
    dias = año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0) ? 29 : 28;
    break;
  case 3:
    alert("Marzo");
    dias = 31;
    break;
  case 4:
    alert("Abril");
    dias = 30;
    break;
  case 5:
    alert("Mayo");
    dias = 31;
    break;
  case 6:
    alert("Junio");
    dias = 30;
    break;
  case 7:
    alert("Julio");
    dias = 31;
    break;
  case 8:
    alert("Agosto");
    dias = 31;
    break;
  case 9:
    alert("Septiembre");
    dias = 30;
    break;
  case 10:
    alert("Octubre");
    dias = 31;
    break;
  case 11:
    alert("Noviembre");
    dias = 30;
    break;
  case 12:
    alert("Diciembre");
    dias = 31;
    break;
  default:
    alert("Mes inválido");
}

alert(`El mes tiene ${dias} días`);
```

**Prob 11** - Una empresa ha establecido diferentes precios a sus productos, según la calidad.

| Producto | Calidad 1 | Calidad 2 | Calidad 3 |
| -------- | --------- | --------- | --------- |
| 1        | 5000      | 4500      | 4000      |
| 2        | 4500      | 4000      | 3500      |
| 3        | 4000      | 3500      | 3000      |

```javascript
let producto = parseInt(prompt("Ingresa el número de producto (1, 2, 3):"));
let calidad = parseInt(prompt("Ingresa la calidad (1, 2, 3):"));

switch (producto) {
  case 1:
    switch (calidad) {
      case 1:
        alert("Precio: 5000");
        break;
      case 2:
        alert("Precio: 4500");
        break;
      case 3:
        alert("Precio: 4000");
        break;
      default:
        alert("Calidad no válida");
    }
    break;
  case 2:
    switch (calidad) {
      case 1:
        alert("Precio: 4500");
        break;
      case 2:
        alert("Precio: 4000");
        break;
      case 3:
        alert("Precio: 3500");
        break;
      default:
        alert("Calidad no válida");
    }
    break;
  case 3:
    switch (calidad) {
      case 1:
        alert("Precio: 4000");
        break;
      case 2:
        alert("Precio: 3500");
        break;
      case 3:
        alert("Precio: 3000");
        break;
      default:
        alert("Calidad no válida");
    }
    break;
  default:
    alert("Producto no válido");
}
```

**Prob 12** - Diseñe un algoritmo que califique el puntaje obtenido en el lanzamiento de tres dados en base a la cantidad de seis obtenidos, de acuerdo a lo siguiente:

**Tres seis:** Oro
**Dos seis:** Plata
**Un seis:** Bronce
**Ningún seis:** Perdió

```javascript
let dado1 = parseInt(prompt("Ingresa el resultado del dado 1:"));
let dado2 = parseInt(prompt("Ingresa el resultado del dado 2:"));
let dado3 = parseInt(prompt("Ingresa el resultado del dado 3:"));

let seisCount = [dado1, dado2, dado3].filter((num) => num === 6).length;

switch (seisCount) {
  case 3:
    alert("Oro");
    break;
  case 2:
    alert("Plata");
    break;
  case 1:
    alert("Bronce");
    break;
  case 0:
    alert("Perdió");
    break;
}
```

**Prob 13** - Dado el dia, mes y año, determine si es una fecha correcta, considere los años bisiestos.

```javascript
let dia = parseInt(prompt("Ingresa el día:"));
let mes = parseInt(prompt("Ingresa el mes:"));
let año = parseInt(prompt("Ingresa el año:"));

switch (mes) {
  case 2:
    let esBisiesto = año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0);
    if (dia >= 1 && dia <= (esBisiesto ? 29 : 28)) {
      alert("Fecha válida");
    } else {
      alert("Fecha inválida");
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    if (dia >= 1 && dia <= 30) alert("Fecha válida");
    else alert("Fecha inválida");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    if (dia >= 1 && dia <= 31) alert("Fecha válida");
    else alert("Fecha inválida");
    break;
  default:
    alert("Mes inválido");
}
```

**Prob 14** - Dado una fecha válida, halle la fecha del siguiente día.

```javascript
let dia = parseInt(prompt("Ingresa el día:"));
let mes = parseInt(prompt("Ingresa el mes:"));
let año = parseInt(prompt("Ingresa el año:"));

let siguienteDia = new Date(año, mes - 1, dia + 1); // Calcula el siguiente día
alert(
  `El siguiente día es: ${siguienteDia.getDate()}/${
    siguienteDia.getMonth() + 1
  }/${siguienteDia.getFullYear()}`
);
```

**Prob 15** - Convierta a números romanos, números menores a 4000.

```javascript
let numero = parseInt(prompt("Ingresa un número menor a 4000:"));

switch (numero) {
  case 1:
    alert("I");
    break;
  case 2:
    alert("II");
    break;
  case 3:
    alert("III");
    break;
  case 4:
    alert("IV");
    break;
  case 5:
    alert("V");
    break;
  case 6:
    alert("VI");
    break;
  case 7:
    alert("VII");
    break;
  case 8:
    alert("VIII");
    break;
  case 9:
    alert("IX");
    break;
  case 10:
    alert("X");
    break;
  // Puedes seguir agregando casos para más números romanos
  default:
    alert("Número no válido");
}
```
