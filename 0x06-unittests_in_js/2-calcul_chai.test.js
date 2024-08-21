const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('culculateNumber', () => {
  describe('#SUM', () => {
    it('...', () => {
      chai.expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('...', () => {
      chai.expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('...', () => {
      chai.expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it('...', () => {
      chai.expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });
  describe('#SUBTRACK', () => {
    it('...', () => {
      chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('...', () => {
      chai.expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
    it('...', () => {
      chai.expect(calculateNumber('SUBTRACT', -1.2, -3.7)).to.equal(3);
    });
    it('...', () => {
      chai.expect(calculateNumber('SUBTRACT', 1.5, -3.7)).to.equal(6);
    });
  });
  describe('#DIVIDE', () => {
    it('...', () => {
      chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('...', () => {
      chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
