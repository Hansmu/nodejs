const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Built in handler for static files. Specify the URL and where to direct it to.
app.use('/assets', express.static(__dirname + '/public'));

// .use can be used to add middleware. A middleware is just a simple function.
app.use('/', (req, res, next) => {
    console.log('Request URL: ', req.url);
    next(); // Continue
});

// By default Express looks for the templates in a folder called views. Looks for files with the extension .ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        ID: 'Bananas', //Second parameter are the params that are passed to the template engine,
        queryString: req.query.queryString //Query string
    }); // Can omit the extension as it's defined with the view engine
});

// A simpler way of mapping HTTP verbs
app.get('/test', (req, res) => {
    res.send(
        '<html>' +
            '<head>' +
                '<link href="assets/style.css" type="text/css" rel="stylesheet"/>' +
            '</head>' +
            '<body>' +
                '<h1>Hello world!</h1>' +
            '</body>' +
            '</html>'
    );
});

app.get('/person/:id', (req, res) => {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

// The second parameter is a handler. Could also add it as a middleware
app.post('/person', urlencodedParser, (req, res) => {
    res.send('Thank you!');
    console.log(req.body.firstName);
});

app.get('/api', (req, res) => {
    // Wrapper to send a JSON response
    res.json({firstName: 'John', lastName: 'Doe'});
});

// Environment variable example
const port = process.env.PORT || 3000;
app.listen(port);