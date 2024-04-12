#!/usr/bin/env node

/* 
   ScratchForge "makeweb"
   Builds a Scratch game into an Android app
*/

const { exec } = require("child_process");
const clone = require('git-clone')
const { mkHtmlLocal } = require('./mkhtml.js')

let mkAndroid = (i, o) => {
    clone("https://github.com/jdev082/sb-template-android", o, (err) => {
      console.error(`ERR: ${err}`)
      process.exit(1)
    })
    mkHtmlLocal(i, `${o}/Scratch Game/views/index.html`, 'a')
}

if (require.main === module) {
   if (process.argv.length === 2) {
      console.error('ERR: Expected at least one argument!');
      process.exit(1);
   }
   mkAndroid(process.argv[2], process.argv[3])
}

module.exports = { mkAndroid }