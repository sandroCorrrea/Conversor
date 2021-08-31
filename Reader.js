const fs = require("fs");
const util = require("util");
class Reader
{
    constructor()
    {
        this.read = util.promisify(fs.readFile);
    }

    async Reader(filepath)
    {
        try
        {
            return await this.read(filepath, "utf-8");
        }
        catch(erro)
        {
            return undefined;
        }
    }
}

module.exports = Reader;