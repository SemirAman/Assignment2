let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

let chatHistory = require('../models/chatHistory');
let eventHistory = require('../models/eventHistory');
let room = require('../models/room');

router.route('/chatHistory').get((req, res) => {
    chatHistory.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  router.route('/eventHistory').get((req, res) => {
    eventHistory.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  router.route('/room').get((req, res) => {
    room.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

module.exports = router;