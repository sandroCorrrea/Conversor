const fs = require('fs');
const util = require('util');

class Writer
{
    constructor()
    {
        this.writerText = util.promisify(fs.writeFile);
    }

    async WriterFile(filename, text)
    {
        try
        {
            await this.writerText(filename, text); 
            return true;
        }
        catch(erro)
        {
            return false;
        }
    }
}

module.exports = Writer;