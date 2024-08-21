const expect = require("chai").expect;
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", () => {
  let calculateNumberSpy;
  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
  });
  afterEach(() => {
    calculateNumberSpy.restore();
  });

  it("...", () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
