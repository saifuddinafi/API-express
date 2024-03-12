const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'eduwork-cruds'
})

module.exports = connection;