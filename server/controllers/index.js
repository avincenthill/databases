//controllers
var models = require('../models');
var utils = require('../utils');

//TBD: use models functions within this files
module.exports = {
  messages: {
    get: function(req, res) {
      console.log('CONTROLLER GET MESSAGES');
      models.messages.get();
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      console.log('CONTROLLER POST MESSAGES');
      models.messages.post();
    }, // a function which handles posting a message to the database
    options: function(req, res) {
      utils.sendResponse(res, null, 202);
      console.log('CONTROLLER FIRED OPTIONS');
    }
  },

  users: {
    get: function(req, res) {
      console.log('CONTROLLER GET USERS');
      models.messages.get();
    },
    post: function(req, res) {
      console.log('CONTROLLER POST USERS');
      models.messages.post();
    }
  }
};
