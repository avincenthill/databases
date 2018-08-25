//models
var db = require('../db');
//TBD: use db functions to read/write

module.exports = {
  //alter messages in db
  messages: {
    get: function() {
      console.log('MODEL GET MESSAGES');
    }, // a function which produces all the messages
    post: function() {
      console.log('MODEL POST MESSAGES');
    } // a function which can be used to insert a message into the database
  },

  //alter users in db
  users: {
    get: function() {
      console.log('MODEL GET USER');
    },
    post: function() {
      console.log('MODEL POST USER');
    }
  },

  //alter rooms in db
  rooms: {
    get: function() {
      console.log('MODEL GET ROOM');
    },
    post: function() {
      console.log('MODEL POST ROOM');
    }
  }
};
