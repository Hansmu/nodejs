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

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(port);