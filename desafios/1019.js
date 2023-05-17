// Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
// Entrada
// O arquivo de entrada contém um valor inteiro N.
// Saída
// Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
const input = require('fs').readFileSync('stdin', 'utf8');
const segundos = parseInt(input.trim());

const horas = Math.floor(segundos / 3600);
const minutos = Math.floor((segundos % 3600) / 60);
const segundos_finais = segundos % 60;

console.log(`${horas}:${minutos}:${segundos_finais}`);