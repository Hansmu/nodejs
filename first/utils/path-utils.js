const path = require('path');

module.exports = {
    rootPath: path.dirname(process.mainModule.filename) // mainModule refers to the main module that started your application.
};