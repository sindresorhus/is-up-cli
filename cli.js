#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import logSymbols from 'log-symbols';
import isUp from 'is-up';
import prependHttp from 'prepend-http';

const cli = meow(`
	Example
	  $ is-up sindresorhus.com
	  ${logSymbols.success} Up

	Exits with code 0 if up and 2 if down
`, {
	importMeta: import.meta,
});

if (cli.input.length === 0) {
	console.error('Specify a URL');
	process.exitCode = 1;
} else {
	(async () => {
		const up = await isUp(prependHttp(cli.input[0]));
		console.log(up ? `${logSymbols.success} Up` : `${logSymbols.error} Down`);
		process.exitCode = up ? 0 : 2;
	})();
}
