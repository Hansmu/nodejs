const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const app = express();
const port = 3030;

app.use(bodyParser.urlencoded({ extended: false })); // Parse form data. extended false avoids parsing non-default features.

app.use((req, res, next) => {
    next(); // Tells the request to travel on to the next middleware
});

app.use('/admin', adminRoutes); // Add a prefix to your URLs
app.use(shopRoutes);

// Add a 404 handler. use handles all requests coming in.
app.use((req, res, next) => {
    const content = (
        '<html>' +
            '<head>' +
                '<title>Not found</title>' +
            '</head>' +
            '<body>' +
                '<h1>Path not found</h1>' +
            '</body>' +
        '</html>'
    );

    res.status(404).send(content);
});

app.listen(port);