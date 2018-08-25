var mysql = require('mysql');

exports.dbConnection = mysql.createConnection({
  // host: 'http://localhost:3000',
  user: 'student', //TBD: student?
  password: 'student',
  database: 'chat'
});

exports.dbConnection.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to database "chat"!');
});

/*
mysql -u student < ./server/schema.sql

mysql -u student < ./server/reset.sql
*/
