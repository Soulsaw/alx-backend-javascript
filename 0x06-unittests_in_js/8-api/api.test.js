const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Test the api', () => {
    it('#Status code is equal to 200', () => {
        request.get('http://localhost:7865', (err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
        });
    });
    it("#Correct result is 'Welcome to the payment system'", () => {
        request.get('http://localhost:7865', (err, res, body) => {
            expect(res.body).to.be.equal('Welcome to the payment system');
        });
    });
    it("#Other", () => {
        request.get('http://localhost:7865', (err, res, body) => {
        });
    });
});
