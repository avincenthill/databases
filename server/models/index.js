//models
// server <functions/SQL> db
var db = require('../db/index');
//TBD: use db functions to read/write
var mysql = require('mysql');

//TBD https://www.sitepoint.com/using-node-mysql-javascript-client/

//connect to db
const con = db.dbConnection;
console.log(typeof con);

module.exports = {
  //alter messages in db
  messages: {
    get: function() {
      console.log('>>MODEL GET MESSAGES');
    }, // a function which produces all the messages
    post: function(data) {
      console.log('<<MODEL POST INVOKED');
      console.log(data);
      //TBD write message to db
      //{ username: 'AVH', text: '', roomname: 'lobby' }
      con.query(`INSERT INTO messages (text) VALUES ('${data.text}');`, err => {
        if (err) {
          throw err;
        }
        console.log(`Inserted ${data} into dbccc`);
      });
    } // a function which can be used to insert a message into the database
  },

  //alter users in db
  users: {
    get: function() {
      console.log('>>MODEL GET USER');
    },
    post: function() {
      console.log('<<MODEL POST USER');
    }
  },

  //alter rooms in db
  rooms: {
    get: function() {
      console.log('>>MODEL GET ROOM');
    },
    post: function() {
      console.log('<<MODEL POST ROOM');
    }
  }
};
