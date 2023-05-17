// Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. A seguir escrever o valor desta variável.
// Entrada
// O arquivo de entrada contém 2 valores inteiros.
// Saída
// Imprima a mensagem "SOMA" com todas as letras maiúsculas, com um espaço em branco antes e depois da igualdade seguido pelo valor correspondente à soma de A e B. Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

const A = parseInt(process.argv[2]);
const B = parseInt(process.argv[3]);
const SOMA = A + B;
console.log(`SOMA = ${SOMA}`); 
//Para executar o programa dígite no terminal "node nomedoarquivo.js 10 5" Ele então vai somar 10 + 5 e mostrar o resultado no terminal
