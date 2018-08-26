var mysql = require('mysql');
var Sequelize = require('sequelize');

var db = new Sequelize('chat', 'student', 'student');

var User = db.define('users', {
  username: Sequelize.STRING
});

var Message = db.define('messages', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

// Define relationships
User.hasMany(Message);
Message.belongsTo(User);

// Create db tables
User.sync({ force: true });
Message.sync({ force: true });

exports.User = User;
exports.Message = Message;

/*
mysql -u student < ./server/schema.sql

mysql -u student < ./server/reset.sql
*/
