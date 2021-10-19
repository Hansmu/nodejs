const {Router} = require('express');

const router = Router(); // Router creates like a mini Express app that communicates with the other apps

router.get('/', (req, res) => {
    res.send(
        '<html>' +
            '<head>' +
                '<title>Homepage</title>' +
            '</head>' +
            '<body>' +
                '<h1>Hello to Express</h1>' +
            '</body>' +
        '</html>'
    );
});

module.exports = router;