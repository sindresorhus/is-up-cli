import test from 'ava';
import logSymbols from 'log-symbols';
import stripAnsi from 'strip-ansi';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['sindresorhus.com']);
	t.is(stdout, `${stripAnsi(logSymbols.success)} Up`);
});
