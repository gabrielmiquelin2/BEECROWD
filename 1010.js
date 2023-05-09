
// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

// Entrada
// O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

// Saída
// A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

// Lê os valores de entrada
let valores1 = lines[0].split(" ");
let codigoPeca1 = parseInt(valores1[0]);
let numPecas1 = parseInt(valores1[1]);
let valorPeca1 = parseFloat(valores1[2]);

let valores2 = lines[1].split(" ");
let codigoPeca2 = parseInt(valores2[0]);
let numPecas2 = parseInt(valores2[1]);
let valorPeca2 = parseFloat(valores2[2]);

// Calcula o valor total
let valorTotal = (numPecas1 * valorPeca1) + (numPecas2 * valorPeca2);

// Exibe a mensagem de saída
console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);

