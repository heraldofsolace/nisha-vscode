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
const ejs = require('ejs');
const { readFile } = require('fs').promises;
const { join } = require('path');

const generate = async function() {
    const scheme = await readFile(join(__dirname, '..', 'src', 'scheme.ejs'));
    const data = await readFile(join(__dirname, '..', 'src', 'colors.json'));
    
    return ejs.render(scheme.toString(), JSON.parse(data.toString()));


}

module.exports = generate;
