const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
const {rootPath} = require("./utils/path-utils");

const app = express();
const port = 3030;

// Middleware to serve static files. It looks at the extensions and decides whether to direct it here or not.
// You can add multiple static file locations and it'll funnel through all of them until it gets a hit.
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false })); // Parse form data. extended false avoids parsing non-default features.

app.use((req, res, next) => {
    next(); // Tells the request to travel on to the next middleware
});

app.use('/admin', adminRoutes); // Add a prefix to your URLs
app.use(shopRoutes);

// Add a 404 handler. use handles all requests coming in.
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootPath, 'views', '404.html'));
});

app.listen(port);