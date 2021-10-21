const {getAddProduct, addNewProduct} = require("../controllers/products");
const {Router} = require('express');

const router = Router(); // Router creates like a mini Express app that communicates with the other apps

router.get('/add-product', getAddProduct);
router.post('/product', addNewProduct);

module.exports = {
    adminRoutes: router
};