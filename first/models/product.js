// const {db} = require('../utils/database')
// const Cart = require("./cart");
//
// /*
// * Removed the callbacks because working with Promises now.
// * */
// class Product {
//     constructor(id, title, imageUrl, description, price) {
//         this.id = id;
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.description = description;
//         this.price = price;
//     }
//
//     save() {
//         return db.execute(
//             'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)', // SQL Injection protection
//             [this.title, this.price, this.imageUrl, this.description]
//         );
//     }
//
//     static deleteById(id) {}
//
//     static fetchAll() {
//         return db.execute('SELECT * FROM products');
//     }
//
//     static findById(id) {
//         return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
//     }
// }

const Sequelize = require('sequelize');
const {db} = require('../utils/database')

const Product = db.define(
    'product', // Model name,
    { // Structure of our model
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: Sequelize.STRING,
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

module.exports = {
    Product
}