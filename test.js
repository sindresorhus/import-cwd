import test from 'ava';
import importCwd from '.';

process.chdir('fixture');

test('importCwd()', t => {
	t.is(importCwd('./fixture'), 'unicorn');
	t.throws(() => {
		importCwd('./nonexistent');
	});
});

test('importCwd.silent()', t => {
	t.is(importCwd.silent('./fixture'), 'unicorn');
	t.is(importCwd.silent('./nonexistent'), undefined);
});
