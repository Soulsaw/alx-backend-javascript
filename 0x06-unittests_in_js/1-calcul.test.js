import { assert } from 'chai';
import calculateNumber from './1-calcul.js';

describe('culculateNumber', () => {
  describe('#SUM', () => {
    it('...', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });
  describe('#SUBTRACK', () => {
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.2, -3.7), 3);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.5, -3.7), 6);
    });
  });
  describe('#DIVIDE', () => {
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
