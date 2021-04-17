const express = require('express');
const { model } = require('mongoose');
const chatHelperController = require('../controllers/chatHelperController');
const router = express.Router();

router.get('/test', chatHelperController.getAnswer);

module.exports = router;
