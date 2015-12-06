import test from 'ava';
import fn from './';

test(t => {
	process.chdir('fixture');
	t.is(fn('./fixture'), 'unicorn');
	t.is(fn('./fixture2'), null);
});
