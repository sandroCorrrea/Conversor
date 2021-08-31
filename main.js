const Reader = require('./Reader');
const Process = require('./Process');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Write = require('./Writer');
const PdfWrite = require('./PdfWriter');

const read = new Reader();
const write = new Write();

async function main()
{
    var conteudo = await read.Reader('./data/Teste - Página1.csv');

    var processo = Process.Process(conteudo);

    var dadosTable = new Table(processo);

    var html = await HtmlParser.Parser(dadosTable);

    // var writeHtml = await write.WriterFile(Date.now() + ".html", html);

    var pdf = PdfWrite.PdfWriter(Date.now() + ".PDF", html);
}

main();