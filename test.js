import test from 'ava';
import fn from './';

test(t => {
	process.chdir('fixture');
	t.is(fn('./fixture'), 'unicorn');
	t.throws(() => fn('./nonexistent'));
	t.is(fn.silent('./fixture'), 'unicorn');
	t.is(fn.silent('./nonexistent'), null);
});
