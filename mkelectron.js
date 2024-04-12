#!/usr/bin/env node

/* 
   ScratchForge "makeweb"
   Builds a Scratch game into an Electron app
*/

const clone = require('git-clone')
const { mkHtmlLocal } = require('./mkhtml.js')

let mkElectron = (i, o) => {
    clone("https://github.com/jdev082/sb-electron-template", o)
    mkHtmlLocal(i, `${o}/index.html`)
}

if (require.main === module) {
   if (process.argv.length === 2) {
      console.error('ERR: Expected at least one argument!');
      process.exit(1);
   }
   mkElectron(process.argv[2], process.argv[3])
}

module.exports = { mkElectron }