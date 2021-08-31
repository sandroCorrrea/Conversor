const fs = require('fs');
const util = require('util');

class Reader
{
    constructor()
    {
        this.readText = util.promisify(fs.readFile);
    }

    async Reader(filepath)
    {
        try
        {
            return await this.readText(filepath, "utf-8");
        }
        catch(erro)
        {
            return undefined;
        }
    }
}

module.exports = Reader;