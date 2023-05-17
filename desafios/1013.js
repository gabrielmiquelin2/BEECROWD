// Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

// Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

// Entrada
// O arquivo de entrada contém três valores inteiros.

// Saída
// Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

let input = require('fs').readFileSync('stdin', 'utf8');

//split para separar o conteúdo da variável input  em um array de substrings, utilizando como separador o espaço em branco. 
//map é utilizada para percorrer cada elemento do array e aplicar a função parseInt para converter cada substring em um número inteiro.
let [valor1, valor2, valor3] = input.split(" ").map(valor =>parseInt(valor));

//Math.abs retorna o valor positivo de um número, ignorando o seu sinal negativo, caso exista.
let maiorAB = (valor1 + valor2 + Math.abs(valor1 - valor2)) / 2;
let maior = (maiorAB + valor3 + Math.abs(maiorAB - valor3)) / 2;

console.log(`${maior} eh o maior`)