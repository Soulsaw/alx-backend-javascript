const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('...', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('...', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('...', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('...', () => {
    assert.equal(calculateNumber(1.5, -3.7), -2);
  });
  it('...', () => {
    assert.equal(calculateNumber(-1.5, 3.7), 3);
  });
  it('...', () => {
    assert.equal(calculateNumber(-1.5, -3.7), -5);
  });
});
