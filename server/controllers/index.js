//controllers
// client <HTTP> server

var db = require('../db/index');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function(req, res) {
      db.Message.findAll({ include: [db.User] }).then(messages => {
        res
          .status(200)
          .header(headers)
          .json(messages);
      });
    },
    post: function(req, res) {
      console.log(req.body);
      db.User.findOrCreate({
        where: { username: req.body.username }
      }).spread(user => {
        db.Message.create({
          userId: user.id,
          text: req.body.text,
          roomname: req.body.roomname
        }).then(message => {
          res.sendStatus(201);
        });
      });
    },
    options: function(req, res) {
      //TBD fix this
      console.log('sending 202');
      res.header(headers).sendStatus(202);
    }
  },
  users: {
    get: function(req, res) {
      db.User.findAll().then(users => {
        res.json(users);
      });
    },
    post: function(req, res) {
      db.User.findOrCreate({ where: { username: req.body.username } }).spread(
        user,
        created => {
          res.sendStatus(created ? 201 : 200); //created or just ok
        }
      );
    }
  }
};
