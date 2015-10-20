import childProcess from 'child_process';
import test from 'ava';
import pify from 'pify';
import logSymbols from 'log-symbols';

test(async t => {
	const stdout = await pify(childProcess.execFile)('./cli.js', ['sindresorhus.com', '--color'], {cwd: __dirname});
	t.is(stdout.trim(), `${logSymbols.success} Up`);
});
