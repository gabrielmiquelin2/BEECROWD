// Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

// Entrada
// O arquivo de entrada contém 4 valores inteiros.

// Saída
// Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.

let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');//shift remove o primeiro elemento de um array e depois o retorna

let A= parseInt(lines.shift());
let B= parseInt(lines.shift());
let C= parseInt(lines.shift());
let D= parseInt(lines.shift());

let diferença =  (A * B - C * D);
console.log(`DIFERENCA = ${diferença}`);