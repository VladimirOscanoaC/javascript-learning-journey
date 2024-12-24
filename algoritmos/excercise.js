let n = 4; // Tamaño de la matriz
let matriz = Array.from({ length: n }, () => Array(n).fill(0)); // Crear matriz 4x4 llena de ceros
let numero = 1; // Número inicial

// Límites para el recorrido en espiral
let inicioFila = 0,
  finFila = n - 1;
let inicioColumna = 0,
  finColumna = n - 1;

// Generar la matriz en espiral
while (inicioFila <= finFila && inicioColumna <= finColumna) {
  // Llenar la fila superior
  for (let i = inicioColumna; i <= finColumna; i++) {
    matriz[inicioFila][i] = numero++;
  }
  inicioFila++;

  // Llenar la columna derecha
  for (let i = inicioFila; i <= finFila; i++) {
    matriz[i][finColumna] = numero++;
  }
  finColumna--;

  // Llenar la fila inferior (si queda)
  if (inicioFila <= finFila) {
    for (let i = finColumna; i >= inicioColumna; i--) {
      matriz[finFila][i] = numero++;
    }
    finFila--;
  }

  // Llenar la columna izquierda (si queda)
  if (inicioColumna <= finColumna) {
    for (let i = finFila; i >= inicioFila; i--) {
      matriz[i][inicioColumna] = numero++;
    }
    inicioColumna++;
  }
}

// Imprimir la matriz
for (let i = 0; i < n; i++) {
  let fila = "";
  for (let j = 0; j < n; j++) {
    fila += matriz[i][j] + "\t";
  }
  console.log(fila.trim());
}
