const {Product} = require("../models/product");

function getAddProduct(req, res) {
    res.render('add-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

function addNewProduct(req, res) {
    new Product(req.body.title).save();
    res.redirect('/admin/add-product');
}

function getProducts(req, res) {
    // Node wants an absolute path. Use the path util to construct and absolute path to the file.
    // We use the path because it builds it depending on your OS, as Linux and Windows have different slashes in the path.
    // const path = require('path');
    // const {rootPath} = require("../utils/path-utils");
    // res.sendFile(path.join(rootPath, 'views', 'shop.html'));

    const products = Product.fetchAll(products => {
        res.render('shop', {
            pageTitle: 'Products',
            activeShop: true,
            productCSS: true,
            path: '/',
            hasProducts: products.length > 0,
            products
        });
    });
}

module.exports = {
    getAddProduct,
    addNewProduct,
    getProducts
};