const { mkHtmlLocal } = require('./mkhtml.js')
const config = require('config');

console.log("Building...")

const makers = config.get('makers');
const html = config.get('html')
const input = config.get('input')

console.log(makers)

for (let i = 0; i < makers.length; i++) {
    if (makers[i] == "html") {
        mkHtmlLocal(input, html.out)
    }
}