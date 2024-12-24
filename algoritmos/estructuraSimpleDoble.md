# Ejercicios de Estructura Selectiva Simple y Doble

**Prob 01** - Dado dos números enteros diferentes, devolver el número mayor.

```javascript
let num1 = parseInt(prompt("Ingrese primer número"));
let num2 = parseInt(prompt("Ingrese segundo número"));

if (num1 > num2) {
  console.log("El número mayor es: ", num1);
} else {
  console.log("El nunúmeroero mayor es: ", num2);
}
```

**Prob 02** - Determinar si un número entero es positivo, negativo o neutro

```javascript
let num = prompt("Ingrese número");

if (isNaN(num)) {
  console.log("El valor ingresado no es un número");
} else {
  let num1 = Number(input); // Convertir la entrada a número

  if (!Number.isInteger(num1)) {
    console.log("El número ingresado no es un entero.");
  } else {
    if (num1 > 0) {
      console.log("El número ingresado es positivo.");
    } else if (num1 < 0) {
      console.log("El número ingresado es negativo.");
    } else {
      console.log("El número ingresado es neutro.");
    }
  }
}
```

**Prob 03** - Dado un caracter determinar si es una vocal.

```javascript
let char = prompt("Ingrese un carácter");

if (char.length === 1 && /^[a-zA-Z]$/.test(char)) {
  // Verifica que sea solo un carácter alfabético
  // Convierte el carácter a minúsculas para hacerlo insensible a mayúsculas
  let lowerChar = char.toLowerCase();

  // Verifica si el carácter es una vocal
  if (["a", "e", "i", "o", "u"].includes(lowerChar)) {
    console.log("El carácter ingresado es una vocal.");
  } else {
    console.log("El carácter ingresado no es una vocal.");
  }
} else {
  console.log("Por favor, ingrese un solo carácter alfabético.");
}
```

**Prob 04** - Determinar si un numero es múltiplo de 3 y 5.

```javascript
let num = prompt("Ingrese número");

if (isNaN(num)) {
  console.log("El valor ingresado no es un número");
} else {
  let num1 = Number(num); // Convertir la entrada a número

  if (!Number.isInteger(num1)) {
    console.log("El número ingresado no es un entero.");
  } else {
    if (num1 % 3 === 0 && num1 % 5 === 0) {
      console.log("El número ingresado SI es multiplo de 3 y 5.");
    } else {
      console.log("El número ingresado NO es multiplo de 3 y 5.");
    }
  }
}
```

**Prob 05** - Determinar si un número entero es par o impar.

```javascript
let num = prompt("Ingrese número");

if (isNaN(num)) {
  console.log("El valor ingresado no es un número");
} else {
  let num1 = Number(num); // Convertir la entrada a número

  if (!Number.isInteger(num1)) {
    console.log("El número ingresado no es un entero.");
  } else {
    if (num1 % 2 === 0) {
      console.log("El número ingresado es PAR.");
    } else {
      console.log("El número ingresado es IMPAR.");
    }
  }
}
```

**Prob 06** - Dado tres números, devolver el números mayor.

```javascript
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

// ¿Alguno NO es un número?"
// Si al menos uno de ellos no es un número (como una letra, palabra o símbolo),
// entonces la condición completa es VERDADERA y envia el mensaje
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.log("Todos los valores ingresados deben ser números.");
} else {
  let mayor = Math.max(num1, num2, num3);
  console.log("El número mayor es:", mayor);
}
```

**Prob 07** - Dado un número, devolver el doble si el número no es par, caso contrario el triple.

```javascript
let num = prompt("Ingrese número");

if (isNaN(num)) {
  console.log("El valor ingresado no es un número");
} else {
  let num1 = Number(num); // Convertir la entrada a número

  if (!Number.isInteger(num1)) {
    console.log("El número ingresado no es un entero.");
  } else {
    if (num1 % 2 === 0) {
      respuesta = num1 * 3;
      console.log(respuesta);
    } else {
      respuesta = num1 * 2;
      console.log(respuesta);
    }
  }
}
```

**Prob 08** - Dado tres números, devolver los números en orden ascendente.

```javascript
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

if (num1 > num2 && num1 > num3) {
  mayor = num1;
} else if (num2 > num3 && num2 > num1) {
  mayor = num2;
} else {
  mayor = num3;
}
if (num1 < num2 && num1 < num3) {
  menor = num1;
} else if (num2 < num3 && num2 < num1) {
  menor = num2;
} else {
  menor = num3;
}

inter = num1 + num2 + num3 - (mayor + menor);

console.log(
  `Los números en orden ascendente son: ${menor}, ${inter}, ${mayor}`
);
```

**Prob 09** - Un restaurante ofrece un descuento del 10% para consumos de hasta S/100.00 y un descuento de 20% para consumos mayores, para ambos casos se aplica un impuesto del 19%. Determinar el monto del descuento, el impuesto y el importe a pagar.

```javascript
let consumo = parseFloat(prompt("Ingrese su consumo"));

const desc1 = 0.1;
const desc2 = 0.2;
const igv = 0.19;
let desc, m_igv, m_pagar;

if (consumo <= 100) {
  desc = desc1 * consumo;
} else {
  desc = desc2 * consumo;
}

m_igv = igv * (consumo - desc);
m_pagar = consumo + m_igv - desc;

console.log(
  `Consumo = ${consumo} \n Descuento = ${desc} \n Impuesto = ${m_igv} \n
  Importe a pagar = ${m_pagar}`
);
```

**Prob 10** - Debio a los excelente resultados, el restaurante decide ampliar sus ofertas de acuerdo a la siguiente escala e consumo, ver tabla. Determinar el monto del descuento, el importe del impuesto y el importe a pagar.

| Consumos (S/.) | Descuento (%) |
| -------------- | ------------- |
| Hasta 100      | 10            |
| Mayor a 100    | 20            |
| Mayor a 200    | 30            |

```javascript
let consumo = parseFloat(prompt("Ingrese su consumo"));

const desc1 = 0.1;
const desc2 = 0.2;
const desc3 = 0.3;
const igv = 0.19;
let desc, m_igv, m_pagar;

if (consumo <= 100) {
  desc = desc1 * consumo;
} else if (consumo < 200) {
  desc = desc2 * consumo;
} else {
  desc = desc3 * consumo;
}

m_igv = igv * (consumo - desc);
m_pagar = consumo + m_igv - desc;

console.log(
  `Consumo = ${consumo} \n Descuento = ${desc} \n Impuesto = ${m_igv} \n Importe a pagar = ${m_pagar}`
);
```
