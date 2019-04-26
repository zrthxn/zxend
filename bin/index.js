#!/usr/bin/env node
const xend = require('../xend.js')
const settings = require('./settings.lock.json')

var args = process.argv.splice(process.execArgv.length + 2)

var options = []
var commands = []

for(let i=0; i<args.length; i++) {
    if(args[i].match(/-*/))
        options.push(args[i])
    else
        commands.push(args[i])
}

xend.command(commands, options)