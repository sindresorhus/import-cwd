import test from 'ava';
import m from '.';

process.chdir('fixture');

test('reqCwd()', t => {
	t.is(m('./fixture'), 'unicorn');
	t.throws(() => {
		m('./nonexistent');
	});
});

test('reqCwd.silent()', t => {
	t.is(m.silent('./fixture'), 'unicorn');
	t.is(m.silent('./nonexistent'), null);
});
