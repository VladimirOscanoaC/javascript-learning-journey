# Ejercicios de Estructura Secuencial

**Prob 01** - Dado dos números enteros, hallar la suma

```javascript
let num1 = parseFloat(prompt("Ingrese primer número"));
let num2 = parseFloat(prompt("Ingrese segundo número"));
let suma = num1 + num2;
console.log("La suma de los números es: ", suma);
```

**Prob 02** - Hallar el cociente y el residuo (resto) de dos números enteros.

```javascript
let num1 = parseInt(prompt("Ingrese primer número"));
let num2 = parseInt(prompt("Ingrese segundo número"));
let cociente = Math.floor(num1 / num2); // Aseguramos que el cociente sea un número entero
let residuo = num1 % num2;
console.log("El cociente es: ", cociente);
console.log("El residuo es: ", residuo);
```

**Prob 03** - Dado el valor de venta **(vv)** de un producto, hallar el IGV (19%) y el precio de venta **(pv)**
igv = vv \* 0.19
pv = vv + igv

```javascript
let vv = parseFloat(prompt("Ingrese el valor de venta del producto"));
let igv = vv * 0.19;
let pv = vv + igv;
// Redondear a 2 decimales
let igvFormateado = igv.toFixed(2);
let pvFormateado = pv.toFixed(2);
console.log(
  `El precio de venta del producto es S/.${pvFormateado} y tiene un IGV de S/.${igvFormateado}`
);
```

**Prob 04** - Hallar la potencia de $a^n$, donde $a$ y $n$ pertenecen a $Z^+$ (números enteros positivos).

```javascript
let numero = parseInt(prompt("Ingrese número"));
let potencia = parseInt(prompt("Ingrese potencia"));
let resultado = Math.pow(numero, potencia);
console.log(`La potencia de ${numero} al ${potencia} es: ${resultado}`);
```

**Prob 05** - Hallar la radicación de $a^1/n$, donde $a$ y $n$ pertenecen a $Z^+$ (números enteros positivos).

```javascript
let numero = parseInt(prompt("Ingrese número"));
let radicacion = parseInt(prompt("Ingrese raiz"));
let resultado = Math.pow(numero, 1 / radicacion);
console.log(resultado);
```

**Prob 06** - Dado un número de 5 digitos, devolver el número en orden inverso.

```javascript
let numero = parseInt(prompt("Ingrese número")); // Número de 5 dígitos
if (numero.toString().length === 5) {
  let numeroInvertido = parseInt(
    numero.toString().split("").reverse().join("")
  );
  console.log(numeroInvertido); // 54321
} else {
  console.log("El número no tiene 5 dígitos.");
}
```

**Prob 07** - Determinar la suma de los N primeros números enteros psitivos ($Z^+$) use la siguiente fórmula.

```javascript
let numero = parseInt(prompt("Ingresa el numero hasta donde sumar"));
let suma = (numero * (numero + 1)) / 2;
console.log(`La suma de los ${numero} primeros números es: ${suma}`);
```

**Prob 08** - Calcular el interés compuesto generado por un capital depositado durante cierta cantidad de tiempo a una tasa de interés determinada, aplique las siguientes fórmulas.
$$M=(1+r\%)^t.C$$
$$I=M-C$$
**Monto (M)**: Es la suma del capital más sus intereses producido en determinado tiempo.
**Tasa de interés (r%)**: Es la ganancia que se obtiene por cada 100 unidades monetarias en cada periodo.
**Capital (C)**: Es todo aquello que se va a ceder o imponer durante algún tiiempo para generar una ganancia.
**Interés (I)**: Parte de la utilidad que obtiene el capitalista prestar su dinero.
**Tiempo (t)**: Es el periodo de tiempo durante el cual se cede el capítal.

```javascript
let capital = parseFloat(prompt("Ingrese su capital"));
let tasa_interes = parseFloat(prompt("Ingrese su tasa de interes"));
let tiempo = parseFloat(prompt("Ingrese su tiempo"));

let monto = (1 + tasa_interes / 100) ** tiempo * capital;
let interes = monto - capital;

let montoFormateado = monto.toFixed(2);
let interesFormateado = interes.toFixed(2);
console.log("el interes es de: ", interesFormateado);
console.log("el monto es de: ", montoFormateado);
```

**Prob 09** - Crear un programa para encontrar el Área de un círculo, use la formula.
$$A=\pi.r^2$$

- **Área**: Es el área del círculo
- **Pi $\pi$**: Representa el valor constante pi (3.14159)
- **Radio (r)**: Es el radio del círculo

```javascript
let radio = parseFloat(prompt("Ingresar el radio del circulo"));
const pi = 3.14159;
let area = pi * radio ** 2;
console.log("El área del circulo es:", area);
```

**Prob 10** - Crear un programa que permita convertir una cantidad de segundos en horas, minutos y segundos.

```javascript
let totalSegundos = 99999;
let horas = Math.floor(totalSegundos / 3600); // Calcular horas
let minutos = Math.floor((totalSegundos % 3600) / 60); // Calcular minutos
let segundos = totalSegundos % 60; // Calcular segundos restantes

console.log(`${horas} horas, ${minutos} minutos y ${segundos} segundos.`);
```

**Prob 11 (Propuesto)** - Dado dos números enteros (Z), a y b, hallar a + b y a - b.

```javascript
let num1 = parseInt(prompt("Ingrese primer número"));
let num2 = parseInt(prompt("Ingrese segundo número"));
let suma = num1 + num2;
let resta = num1 - num2;
console.log(
  `La suma de los números es: ${suma}\n La resta de los números es ${resta}`
);
```

**Prob 12 (Propuesto)** - Dados dos números enteros, determinar cuantos nnúmeros enteros estan incluidos en ellos.

```javascript
let a = 3; // Primer número
let b = 7; // Segundo número

let totalEnteros = Math.abs(b - a) + 1; // Diferencia absoluta + 1
console.log(
  `El total de números enteros entre ${a} y ${b} es: ${totalEnteros}`
);
```

**Prob 13 (Propuesto)** - Dada una cantidad de milimetros, expresarlo en máxima cantidad de metros, el resto en decimetrom, centimetros y milimetros.

```javascript
let totalMilimetros = 12345; // Ejemplo: cantidad en milímetros

let metros = Math.floor(totalMilimetros / 1000); // Máxima cantidad de metros
let decimetros = Math.floor((totalMilimetros % 1000) / 100); // Resto en decímetros
let centimetros = Math.floor((totalMilimetros % 100) / 10); // Resto en centímetros
let milimetros = totalMilimetros % 10; // Resto en milímetros

console.log(
  `${metros} metros, ${decimetros} decímetros, ${centimetros} centímetros, y ${milimetros} milímetros.`
);
```

**Prob 14 (Propuesto)** - Obtener el valor de c y d de acuerdo a la siguiente fórmula.
$$c=\frac{(4a^2+3ba+b^2)}{a^2-b^2}$$
$$d=\frac{(3c^2+a+b)}{4}$$

```javascript
let num1 = parseInt(prompt("Ingrese primer número"));
let num2 = parseInt(prompt("Ingrese segundo número"));
let c = (4 * num1 ** 4 + 3 * num2 * num1 + num2 ** 2) / (num1 ** 2 - num2 ** 2);
let d = (3 * c ** 2 + num1 + num2) / 4;

console.log("El valor de c es: ", c);
console.log("El valor de d es: ", d);
```

**Prob 15 (Propuesto)** - Porcentaje de 4 números respecto a su suma

```javascript
let a = 10,
  b = 20,
  c = 30,
  d = 40;
let suma = a + b + c + d;

let porcentajeA = (a / suma) * 100;
let porcentajeB = (b / suma) * 100;
let porcentajeC = (c / suma) * 100;
let porcentajeD = (d / suma) * 100;

console.log(`Porcentajes: 
A: ${porcentajeA}%, 
B: ${porcentajeB}%, 
C: ${porcentajeC}%, 
D: ${porcentajeD}%`);
```

**Prob 16 (Propuesto)** - Área y Perímetro de un cuadrado

```javascript
let lado = 5; // Ejemplo

let area = lado ** **2;
let perimetro = 4 * lado;

console.log(`Área: ${area}, Perímetro: ${perimetro}`);
```

**Prob 17 (Propuesto)** - Convertir horas a minutos y segundos

```javascript
let horas = 2; // Ejemplo

let minutos = horas * 60;
let segundos = minutos * 60;

console.log(
  `${horas} horas son equivalentes a ${minutos} minutos y ${segundos} segundos.`
);
```

**Prob 18 (Propuesto)** - Convertir Fahrenheit a Celsius y Kelvin

```javascript
let fahrenheit = 98.6; // Ejemplo

let celsius = ((fahrenheit - 32) * 5) / 9;
let kelvin = celsius + 273.15;

console.log(
  `${fahrenheit}°F equivalen a ${celsius.toFixed(2)}°C y ${kelvin.toFixed(2)}K.`
);
```

**Prob 19 (Propuesto)** - Área y Perímetro de un rectángulo

```javascript
let base = 10; // Ejemplo
let altura = 5; // Ejemplo

let areaRectangulo = base * altura;
let perimetroRectangulo = 2 * (base + altura);

console.log(`Área: ${areaRectangulo}, Perímetro: ${perimetroRectangulo}`);
```

**Prob 20 (Propuesto)** - Convertir grados sexagesimales a centesimales

```javascript
let gradosSexagesimales = 180; // Ejemplo

let gradosCentesimales = gradosSexagesimales * (10 / 9);

console.log(
  `${gradosSexagesimales}° sexagesimales equivalen a ${gradosCentesimales}° centesimales.`
);
```
