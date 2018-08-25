//models
// server <functions/SQL> db
var db = require('../db/index');
var mysql = require('mysql');

//TBD https://www.sitepoint.com/using-node-mysql-javascript-client/

//TBD after switch rooms we break on roomname="newRoom" Error: ER_BAD_FIELD_ERROR: Unknown column 'undefined' in 'field list'

//connect to db
const con = db.dbConnection;

module.exports = {
  //alter messages in db
  messages: {
    get: function(cb) {
      console.log('>>MODEL GET MESSAGES');

      con.query('SELECT * FROM messages;', (err, data) => {
        if (err) {
          throw err;
        }
        let messageArr = [];
        const appendToArr = function(message) {
          messageArr.push(message);
          // console.log('msgarr', messageArr);
        };
        // cb(
        data.forEach(packet => {
          var message = JSON.parse(JSON.stringify(packet));
          //message structure {id: 1, text: "hi", id_rooms: 1, id_users: 1, timestamp: null}
          //add roomname prop
          //TBD sql query and save to rooms for roomname
          con.query(
            `SELECT name FROM rooms WHERE id = '${message.id_rooms}';`,
            (err, roomname) => {
              if (err) {
                throw err;
              }
              message.roomname = JSON.parse(JSON.stringify(roomname[0].name));

              con.query(
                `SELECT name FROM users WHERE id = '${message.id_users}';`,
                (err, username) => {
                  if (err) {
                    throw err;
                  }
                  message.username = JSON.parse(
                    JSON.stringify(username[0].name)
                  );
                  // console.log('server sees ', message);
                  appendToArr(message);
                  if (messageArr.length === data.length) {
                    cb(messageArr);
                  }
                }
              );
            }
          );
        });
        // );
        //TBD need to return array properly
      });
    }, // a function which produces all the messages

    post: function(data) {
      console.log('<<MODEL POST INVOKED');
      //{ username: 'AVH', text: '', roomname: 'lobby' }
      // query room table if room exists
      var messageInfo = {};

      //helper function
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
