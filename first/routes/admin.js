const path = require('path');
const {rootPath} = require("../utils/path-utils");
const {Router} = require('express');

const router = Router(); // Router creates like a mini Express app that communicates with the other apps

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootPath, 'views', 'add-product.html'))
});

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/admin/add-product');
});

module.exports = router;