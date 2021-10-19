const {Router} = require('express');

const router = Router(); // Router creates like a mini Express app that communicates with the other apps

router.get('/add-product', (req, res) => {
    res.send(
        '<html>' +
            '<head>' +
                '<title>Add Product</title></head>' +
            '<body>' +
                '<h1>Add a new product</h1>' +
                    '<form action="/admin/product" method="POST" name="addProduct">' +
                        '<input type="text" name="title"/>' +
                        '<button type="submit">' +
                            'Send' +
                        '</button>' +
                    '</form>' +
            '</body>' +
        '</html>'
    );
});

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/admin/add-product');
});

module.exports = router;