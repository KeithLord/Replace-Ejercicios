let tamaño = prompt("Ingresar tamaño");
let matrizFilz = new Array();
let diagonalp = 0;
let diagonals = 0;

for (let i = 0; i < tamaño; i++) {
  matrizFilz[i] = new Array();
  for (let j = 0; j < tamaño; j++) {
    let aleatorio = 1 + Math.floor(Math.random() * 100);
    matrizFilz[i][j] = aleatorio;
    if (i == j) {
      diagonalp = diagonalp + matrizFilz[i][j];
    }
    if (i+j == tamaño-1) {
      diagonals = diagonals + matrizFilz[i][j];
    }
  }
}

for (let ele in matrizFilz) {
  console.log(ele + ' = ' + matrizFilz[ele]);
}

console.log(diagonalp);
console.log(diagonals);
