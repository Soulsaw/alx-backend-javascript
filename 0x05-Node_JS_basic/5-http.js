const http = require('http');
const countStudents = require('./3-read_file_async');
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
      res.write('This is the list of our students\n');
      countStudents(process.argv[2].toString()).then((output) => {
        res.end(output.slice(0, -1));
      }).catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
    }
  }
});
app.listen(port, '127.0.0.1', () => {
  console.log('...');
});
