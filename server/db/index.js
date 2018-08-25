var mysql = require('mysql');

dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
exports.connectToDB = dbConnection.connect;
