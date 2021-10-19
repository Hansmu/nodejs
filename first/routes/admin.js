const {Router} = require('express');

const router = Router(); // Router creates like a mini Express app that communicates with the other apps

const products = [];

router.get('/add-product', (req, res) => {
    res.render('add-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});

router.post('/product', (req, res) => {
    console.log(req.body);
    products.push({
        title: req.body.title
    });
    res.redirect('/admin/add-product');
});

module.exports = {
    adminRoutes: router,
    products
};