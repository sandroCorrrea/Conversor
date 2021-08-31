const Reader = require('./Reader');
const Process = require('./Process');
const Table = require('./Table');

const read = new Reader();

async function main()
{
    var conteudo = await read.Reader('./data/Teste - Página1.csv');

    var processo = Process.Process(conteudo);

    var dadosTable = new Table(processo);

    console.log(dadosTable.rows);

}

main();