const htmlPdf = require('html-pdf');

class PdfWriter
{
    static PdfWriter(filename, html)
    {
        htmlPdf.create(html, {}).toFile(filename, (erro) => {});
    }
}

module.exports = PdfWriter;