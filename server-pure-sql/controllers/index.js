//controllers
// client <HTTP> server
var models = require('../models');
var utils = require('../utils');

module.exports = {
  messages: {
    get: function(req, res) {
      console.log('>CONTROLLER GET MESSAGES');

      models.messages.get(data => {
        console.log('server sends ', data);
        utils.sendResponse(res, data, 200);
      });
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      console.log('<CONTROLLER POST MESSAGES');
      models.messages.post(req.body);
      //TBD: why don't you need to unchunk the request here?
    }, // a function which handles posting a message to the database
    options: function(req, res) {
      console.log('*CONTROLLER OPTIONS MESSAGES');
      utils.sendResponse(res, null, 202);
    }
  },

  //TBD
  users: {
    get: function(req, res) {
      console.log('>CONTROLLER GET USERS');
      models.messages.get();
    },
    post: function(req, res) {
      console.log('<CONTROLLER POST USERS');
      models.messages.post();
    }
  }
};
