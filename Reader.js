const fs = require('fs');
const util = require('util');

class ReaderFile
{
    constructor()
    {
        this.readFile = util.promisify(fs.readFile)
    }
    async ReaderFile(filepath)
    {
        try{
            return await this.readFile(filepath, "utf-8");
        }
        catch(erro)
        {
            return undefined;
        }
    }
}

module.exports = ReaderFile;