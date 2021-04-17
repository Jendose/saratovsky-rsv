const express = require('express');
const { model } = require('mongoose');
const chatHelperController = require('../controllers/chatHelperController');
const router = express.Router();
const bodyParser = require("body-parser");
const parser = bodyParser.urlencoded({
    extended: true,
  });

router.post('/test', parser, chatHelperController.getAnswer);

module.exports = router;
