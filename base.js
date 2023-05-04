
// Esse trecho de código em JavaScript lê o conteúdo do arquivo "stdin" utilizando a biblioteca nativa do Node.js chamada "fs" e armazena o conteúdo na variável "input".
// Mais especificamente, a função "require" é usada para carregar o módulo "fs" (File System) do Node.js, que fornece uma interface para interagir com o sistema de arquivos do computador. A função "readFileSync" é usada para ler o conteúdo do arquivo especificado como primeiro parâmetro (neste caso, "stdin"), e o segundo parâmetro "utf8" é usado para especificar que o conteúdo do arquivo deve ser interpretado como texto.
// Portanto, se houver um arquivo chamado "stdin" no diretório atual, seu conteúdo será lido e armazenado na variável "input". Se não houver um arquivo com esse nome, um erro será gerado.
let input = require("fs").readFileSync("stdin","utf8");
var lines = input.split('\n');




