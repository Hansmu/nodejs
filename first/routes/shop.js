const path = require('path');
const {rootPath} = require("../utils/path-utils");
const {Router} = require('express');

const router = Router(); // Router creates like a mini Express app that communicates with the other apps

router.get('/', (req, res) => {
    // Node wants an absolute path. Use the path util to construct and absolute path to the file.
    // We use the path because it builds it depending on your OS, as Linux and Windows have different slashes in the path.
    res.sendFile(path.join(rootPath, 'views', 'shop.html'));
});

module.exports = router;