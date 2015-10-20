#!/usr/bin/env node
'use strict';
const meow = require('meow');
const logSymbols = require('log-symbols');
const isUp = require('is-up');

const cli = meow(`
	Example
	  $ is-up sindresorhus.com
	  ${logSymbols.success} Up
`);

if (cli.input.length === 0) {
	console.error('Specify a URL');
	process.exit(1);
}

isUp(cli.input[0]).then(up => {
	console.log(up ? `${logSymbols.success} Up` : `${logSymbols.error} Down`);
	process.exit(up ? 0 : 2);
});
