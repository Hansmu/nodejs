const {getProducts} = require("../controllers/products");
const {Router} = require('express');

const router = Router(); // Router creates like a mini Express app that communicates with the other apps

router.get('/', getProducts);

module.exports = router;