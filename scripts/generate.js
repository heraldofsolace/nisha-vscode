const ejs = require('ejs');
const { readFile } = require('fs').promises;
const { join } = require('path');

const generate = async function() {
    const scheme = await readFile(join(__dirname, '..', 'src', 'scheme.ejs'));
    const data = await readFile(join(__dirname, '..', 'src', 'colors.json'));
    
    return ejs.render(scheme.toString(), JSON.parse(data.toString()));


}

module.exports = generate;