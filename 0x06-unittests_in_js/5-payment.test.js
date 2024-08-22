const expect = require("chai").expect;
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", () => {
  let calculateNumberStub;
  let consoleLogSpy;

  
describe('sendPaymentRequestToAPI', () => {
  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(120);
    
    consoleLogSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
  it("...", () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
  });
})
describe('sendPaymentRequestToAPI', () => {
  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(20);
    
    consoleLogSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
  it("...", () => {
    sendPaymentRequestToApi(10, 10);

    expect(calculateNumberStub.calledWith('SUM', 10, 10)).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
  });
})

});
