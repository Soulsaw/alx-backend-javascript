import { assert } from "chai";
import calculateNumber from "./0-calcul.js";

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
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
