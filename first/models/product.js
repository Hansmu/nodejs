const fs = require('fs');
const path = require('path');
const {rootPath} = require("../utils/path-utils");

const productsPath = path.join(rootPath, 'data', 'products.json');

class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(productsPath, JSON.stringify(products), () => {});
        });
        return this;
    }

    // Wouldn't make sense that you need to instantiate a class just to fetch all
    static fetchAll(callback) {
        getProductsFromFile(callback);
    }
}

function getProductsFromFile(callback) {
    fs.readFile(productsPath, (err, data) => {
        if (err) {
            return callback([]);
        }

        callback(JSON.parse(data));
    });
}

module.exports = {
    Product
}