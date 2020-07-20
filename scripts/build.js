/*
* Nisha: Dark colorscheme for VS Code
* Copyright (C) 2020  Aniket Bhattacharyea
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
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
