const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!isNaN(id)) {
        res.send(`Payment methods for cart ${id}`)
    }
    else
    {
        res.status(404);
    }
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
})

module.exports = app;
