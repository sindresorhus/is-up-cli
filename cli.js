#!/usr/bin/env node
'use strict';
const meow = require('meow');
const logSymbols = require('log-symbols');
const isUp = require('is-up');
const prependHttp = require('prepend-http');

const cli = meow(`
	Example
	  $ is-up sindresorhus.com
	  ${logSymbols.success} Up

	Exits with code 0 if up and 2 if down
`);

if (cli.input.length === 0) {
	console.error('Specify a URL');
	process.exit(1);
}

(async () => {
	const up = await isUp(prependHttp(cli.input[0]));
	console.log(up ? `${logSymbols.success} Up` : `${logSymbols.error} Down`);
	process.exitCode = up ? 0 : 2;
})();
