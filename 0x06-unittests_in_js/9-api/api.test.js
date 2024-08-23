const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Test the api', () => {
    describe('#GET / route', () => {
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
    }); 
    describe('#Test the carte page', () => {
        it('#Status code is equal to 200 and result', () => {
            request.get('http://localhost:7865/carte/12', (err, res, body) => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body).to.be.equal('Payment methods for cart 12');
            });
        });
        it('#Status code if the id is not a number', () => {
            request.get('http://localhost:7865/carte/red', (err, res, body) => {
                expect(res.statusCode).to.be.equal(404);
            });
        });
    });        
});
