'use strict';
var test = require('tape');
var Console = require('./').Console;

var logger = new Console(process.stdout);

test('Console should be a class', function(t) {
  t.plan(2);
  t.ok(Console);
  t.ok(logger);
  t.end();
});
