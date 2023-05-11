
// Esse código em JavaScript lê um arquivo de entrada chamado "stdin" usando o módulo 'fs' (file system) e armazena o conteúdo do arquivo em uma variável chamada "input".
// Em seguida, ele divide o conteúdo da variável "input" em um array de substrings, onde cada substring representa uma linha do arquivo de entrada. O separador usado para dividir as linhas é o caractere '\n'.
// Dessa forma, o código permite que o programa leia o conteúdo de um arquivo de entrada e o divida em linhas para posterior processamento. Por exemplo, se o arquivo de entrada contiver uma lista de valores em cada linha, o programa poderá ler o arquivo de entrada e acessar cada valor separadamente a partir do array de substrings.

let input = require("fs").readFileSync("stdin","utf8");
let lines = input.split('\n');

let a = 10;
let b = 20;

// "fs" é uma biblioteca que permite interagir com o sistema de arquivos do computador usando JavaScript no Node.js
// readFileSync = é usada para ler o arquivo e retornar seu conteúdo. 

//split() = pega uma string e divide ela em arrays.
//EXEMPLO:
// var str = "Hello,World";
// var arr = str.split(',');
// console.log(arr);
// VAI RETORNAR ["Hello", "World"]

// \n',representa uma quebra de linha, isso indica que uma nova linha deve ser iniciada a partir desse ponto


//shift remove o primeiro elemento de um array e depois o retorna