// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

// Entrada
// O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.

// Saída
// Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.

let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');//shift remove o primeiro elemento de um array e depois o retorna

let numeroFuncionario = parseInt(lines.shift());
let horasTrabalhadas = parseInt(lines.shift());
let valorHoraTrabalhada = parseFloat(lines.shift());

let salario = horasTrabalhadas * valorHoraTrabalhada;

console.log(`Number = ${numeroFuncionario}`);
console.log(`Salary = R$${salario.toFixed(2)}`);


