const path = require('path');

const {Router} = require('express');

const {getAddProduct, getProducts, postAddProduct} = require('../controllers/admin');

const router = Router(); // Router creates like a mini Express app that communicates with the other apps

// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/products => GET
router.get('/products', getProducts);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

module.exports = {
    adminRoutes: router
};
