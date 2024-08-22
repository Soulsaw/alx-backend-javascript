const Utils = require('./utils');

function sendPaymentRequestToApi (totalAmount, totalShipping) {
  const sendPay = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sendPay}`);
}

module.exports = sendPaymentRequestToApi;
