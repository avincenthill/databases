//models
// server <functions/SQL> db
var db = require('../db/index');
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
      //{ username: 'AVH', text: '', roomname: 'lobby' }
      // query room table if room exists
      var messageInfo = {};

      const writeMessage = obj => {
        con.query(
          `INSERT INTO messages (id, text, id_rooms, id_users) VALUES (NULL, '${
            data.text
          }', ${obj.roomId}, ${obj.userId});`,
          // `INSERT INTO messages (text) VALUES ('${data.text}');`,
          err => {
            if (err) {
              throw err;
            }
            console.log('Inserted message into db');
          }
        );
      };

      con.query(
        `SELECT id FROM rooms WHERE name = '${data.roomname}';`,
        (err, id) => {
          if (err) {
            throw err;
          }
          if (!id[0]) {
            con.query(
              `INSERT INTO rooms (name) VALUES ('${data.roomname}');`,
              err => {
                if (err) {
                  throw err;
                }
                console.log(`Inserted roomname ${data.roomname} into db`);

                con.query(
                  `SELECT id FROM rooms WHERE name = '${data.roomname}';`,
                  (err, id) => {
                    if (err) {
                      throw err;
                    }
                    messageInfo.roomId = JSON.parse(JSON.stringify(id[0])).id;
                  }
                );
              }
            );
          } else {
            messageInfo.roomId = JSON.parse(JSON.stringify(id[0])).id;
          }

          con.query(
            `SELECT id FROM users WHERE name = '${data.username}';`,
            (err, id) => {
              if (err) {
                throw err;
              }
              if (!id[0]) {
                con.query(
                  `INSERT INTO users (name) VALUES ('${data.username}');`,
                  err => {
                    if (err) {
                      throw err;
                    }
                    console.log(`Inserted username ${data.username} into db`);

                    con.query(
                      `SELECT id FROM users WHERE name = '${data.username}';`,
                      (err, id) => {
                        if (err) {
                          throw err;
                        }
                        messageInfo.userId = JSON.parse(
                          JSON.stringify(id[0])
                        ).id;
                        writeMessage(messageInfo);
                      }
                    );
                  }
                );
              } else {
                messageInfo.userId = JSON.parse(JSON.stringify(id[0])).id;
                writeMessage(messageInfo);
              }
            }
          );
        }
      );
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
