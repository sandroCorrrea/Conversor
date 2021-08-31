const Reader = require('./Reader');

const read = new Reader();

async function main() {
    var dados = await read.ReaderFile('./data/Teste - Página1.csv');
    console.log(dados);
}

main();