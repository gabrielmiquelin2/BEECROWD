// Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade constante de 60 Km/h e o carro Y sai com velocidade constante de 90 Km/h.
// Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja, consegue se afastar um quilômetro a cada 2 minutos.
// Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.

let input = require("fs").readFileSync("stdin","utf8");
var lines = input.split('\n');

// Lendo a distância entre os carros com o prompt()
const distancia = input;

// Convertendo a distância para metros
const distanciaMetros = distancia * 1000;

// Calculando a velocidade relativa em metros por segundo
const velocidadeRelativa = (90 - 60) * 1000 / 3600;

// Calculando o tempo necessário para o carro Y alcançar o carro X em segundos
const tempoSegundos = distanciaMetros / velocidadeRelativa;

// Convertendo o tempo para minutos
const tempoMinutos = tempoSegundos / 60;

console.log(` ${tempoMinutos.toFixed(0)} minutos`);

//solução mais SIMPLES
// console.log(`${input * 2} minutos`)