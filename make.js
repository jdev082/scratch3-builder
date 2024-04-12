#!/usr/bin/env node

const { mkHtmlLocal } = require('./mkhtml.js')
const { mkElectron } = require('./mkelectron.js')
const config = require('config');

console.log("Building...")

const makers = config.get('makers');
const html = config.get('html')
const electron = config.get('electron')
const input = config.get('input')

console.log(makers)

for (let i = 0; i < makers.length; i++) {
    if (makers[i] == "html") {
        mkHtmlLocal(input, html.out)
    }
    if (makers[i] == "electron") {
        mkElectron(input, electron.out)
    }
}