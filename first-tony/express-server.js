const express = require('express');

const app = express();

// A simpler way of mapping HTTP verbs
app.get('/', (req, res) => {
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', (req, res) => {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', (req, res) => {
    // Wrapper to send a JSON response
    res.json({firstName: 'John', lastName: 'Doe'});
});

// Environment variable example
const port = process.env.PORT || 3000;
app.listen(port);