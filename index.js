const {mkHtmlLocal, writeHtmlLocal} = require('./mkhtml.js')
const config = require('config');

console.log("Building...")

const makers = config.get('makers');

console.log(makers)
