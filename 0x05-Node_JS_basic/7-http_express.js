const express = require('express');
const app = express();
const countStudents = require('./3-read_file_async');
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2].toString())
    .then((output) => {
      res.send(output.slice(0, -1));
    })
    .catch(() => {
      res.send('Cannot load the database');
    });
});

app.listen(port, () => {});
module.exports = app;
