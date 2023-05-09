 // Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.
// Dica: Ao utilizar a fórmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens (dentre elas o C++), assumem que o resultado da divisão entre dois inteiros é outro inteiro.
// Entrada
// O arquivo de entrada contém um valor de ponto flutuante (dupla precisão), correspondente ao raio da esfera.

const input = require('fs').readFileSync('stdin', 'utf8');
const raio = parseFloat(input);
const pi = 3.14159;

const volumeEsfera = (4 / 3) * pi * Math.pow(raio, 3); // Usando Math.pow para calcular a potência do raio

console.log(`VOLUME = ${volumeEsfera.toFixed(3)}`); 