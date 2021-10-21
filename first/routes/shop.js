const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router(); // Router creates like a mini Express app that communicates with the other apps

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts)

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
