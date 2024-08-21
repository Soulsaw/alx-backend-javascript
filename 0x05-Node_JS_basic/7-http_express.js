const express = require('express');
const app = express();
const countStudents = require('./3-read_file_async');
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((output) => {
      res.send(['This is the list of our students', output].join('\n'));
    })
    .catch(() => {
      res.send('his is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {});
module.exports = app;
