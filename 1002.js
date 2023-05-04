// A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

// - Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

// Entrada
// A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

// Saída
// Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. Utilize variáveis de dupla precisão (double). Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error"

let input = require("fs").readFileSync("stdin","utf8");
let valor = input.split('\n');

let n = 3.14159;
let raio = valor.shift();

// let area = (raio * raio) * pi 
 SEGUNDA FORMA
let area = n * Math.pow(raio,2);//raio ao quadrado

console.log(`A= ${area.toFixed(4)}`);


//OBS: O codigo vai estar com erro posi você precisa comentar um dos dois!

//OUTRA FORMA DE FAZER O CODIGO

let input = require("fs").readFileSync("stdin","utf8");

let pi = 3.14159;

let raio = parseInt(input);

let area = pi * raio ** 2 //raio ao quadrado

console.log(area.toFixed(4))

