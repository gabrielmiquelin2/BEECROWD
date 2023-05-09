// Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.
// Entrada
// O arquivo de entrada contém três valores com um dígito após o ponto decimal.

// Saída
// O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

let input = require('fs').readFileSync('stdin', 'utf8').trim();
let lines = input.split('\n');

const PI = 3.14159;

// Extrai os valores de entrada

// Essa linha de código lê uma string de entrada, remove espaços em branco no início e no fim, divide a string em um array de substrings usando espaços em branco como separador, converte cada substring em um número com ponto flutuante e atribui os três números resultantes às variáveis A, B e C. Isso é feito usando os métodos trim(), split() e map() do JavaScript, bem como o operador destructuring.
const [A, B, C] = input.trim().split(/\s+/).map(parseFloat);

// Calcula as áreas
const areaTriangulo = (A * C) / 2;
const areaCirculo = PI * C ** 2;
const areaTrapezio = ((A + B) * C) / 2;
const areaQuadrado = B ** 2;
const areaRetangulo = A * B;

// Imprime os resultados
console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
