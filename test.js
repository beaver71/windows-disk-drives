'use strict';

const assert = require('assert');
const m = require('./index');

describe('JSON', () => {
  it('Should give array of disks w/length > 0', () => {
    return m.getDisks()
      .then((disks) => {
        assert.ok(disks.length > 0);
      });
  });

  it('Should give the first disk drive C:', () => {
    return m.getDisks()
      .then((disks) => {
        assert.ok(disks[0].Caption === 'C:');
      });
  });
});

describe('RAW', () => {
  it('Should give stdout', () => {
    return m.getDisks(true)
      .then((stdout) => {
        assert.ok(stdout.length > 0);
      });
  });
});
