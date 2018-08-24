var db = require("../db");
//TBD: use db functions to read/write

module.exports = {
  //alter messages in db
  messages: {
    get: function() {
      console.log("ATTEMPTED GET MESSAGES");
    }, // a function which produces all the messages
    post: function() {
      console.log("ATTEMPTED POST MESSAGES");
    } // a function which can be used to insert a message into the database
  },

  //alter users in db
  users: {
    get: function() {
      console.log("ATTEMPTED GET USER");
    },
    post: function() {
      console.log("ATTEMPTED POST USER");
    }
  },

  rooms: {
    get: function() {
      console.log("ATTEMPTED GET ROOM");
    },
    post: function() {
      console.log("ATTEMPTED POST ROOM");
    }
  }
};
