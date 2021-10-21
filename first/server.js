const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const {adminRoutes} = require('./routes/admin');
const shopRoutes = require('./routes/shop')
const {get404} = require("./controllers/error");
const {rootPath} = require("./utils/path-utils");

const app = express();
const port = 3030;

const TEMPLATE_EXTENSION = 'ejs';

// The name defines the extension. If it was hbs, then you could use .hbs files
// app.engine(
//     TEMPLATE_EXTENSION,
//     expressHandlebars({
//         layoutsDir: 'views/layouts/', // This would be the default
//         defaultLayout: 'main-layout', // Has to have a main-layout folder in the layouts folder,
//         extname: TEMPLATE_EXTENSION
//     })
// );
app.set('view engine', TEMPLATE_EXTENSION);

// app.set('view engine', 'pug'); // Pug support is built in, so only need the library. Handlebars, however, does not have default support.

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
app.use(get404);

app.listen(port);