const connection = require('../db')

const db = connection.db('test');
db.createCollection('newCollect');



module.exports = db;