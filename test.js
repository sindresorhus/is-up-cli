import test from 'ava';
import logSymbols from 'log-symbols';
import execa from 'execa';

test(async t => {
	const {stdout} = await execa('./cli.js', ['sindresorhus.com', '--color']);
	t.is(stdout, `${logSymbols.success} Up`);
});
