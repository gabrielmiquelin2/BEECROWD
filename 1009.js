// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

// Entrada
// O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

// Saída
// Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');//shift remove o primeiro elemento de um array e depois o retorna

let nome = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let totalDeVendas = parseFloat(lines.shift())

let comissao = totalDeVendas * 0.15;

let salarioFinal = comissao + salarioFixo

console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`);