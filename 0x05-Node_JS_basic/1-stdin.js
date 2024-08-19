const process = require('process');
const displayMessage = require('./0-console');

displayMessage('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name: ${name}`);
  }
});

process.stdin.on('end', () => {
  displayMessage('This important software is now closing');
});
