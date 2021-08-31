const Reader = require('./Reader');
const Process = require('./Process');
const read = new Reader();

async function main()
{
    var conteudo = await read.Reader('./data/Teste - Página1.csv');

    var processo = Process.Process(conteudo);
}

main();