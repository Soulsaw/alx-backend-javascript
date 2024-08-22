const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-as-promised"));
const getPaymentTokenFromAPI = require('./6-payment_token');

describe.only('getPaymentTokenFromAPI', () => {
    it('Should return promise', (done) => {
        expect(getPaymentTokenFromAPI(true)).to.equal({ data: 'Successful response from the API' });
        done();
    })
});
