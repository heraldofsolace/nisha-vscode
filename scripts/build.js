const generate = require('./generate.js');
const { join } = require('path');
const fs = require('fs');
const THEME_PATH = join(__dirname, '..', 'themes');

const build = async function() {
    if (!fs.existsSync(THEME_PATH)) {
        fs.mkdirSync(THEME_PATH);
    }
    
    const theme = await generate();
    console.log(theme);
    return fs.promises.writeFile(
        join(THEME_PATH, 'Nisha-color-theme.json'),
        theme
    );
}

if (require.main === module) {
    build().then(data => {
        console.log("Successfully built theme!");
    }).catch(err => console.error(err));
}
