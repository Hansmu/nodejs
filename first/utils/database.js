// const mysql = require('mysql2');
//
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node_tutorial',
//     password: 'root'
// });
//
// module.exports = {
//     db: pool.promise() // promises instead of callbacks as we can use Promise chains instead of callback nesting
// };

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'node_tutorial',
    'root',
    'root',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = {
    db: sequelize
};