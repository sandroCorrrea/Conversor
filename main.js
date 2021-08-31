const Reader = require('./Reader');
const Process = require('./Process');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');

const read = new Reader();

async function main()
{
    var conteudo = await read.Reader('./data/Teste - Página1.csv');

    var processo = Process.Process(conteudo);

    var dadosTable = new Table(processo);

    var html = await HtmlParser.Parser(dadosTable);

    console.log(html);
}

main();