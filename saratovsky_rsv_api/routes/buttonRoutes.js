const express = require('express');
const buttonController = require('../controllers/buttonController');
const router = express.Router();

router.get('/start-learning', buttonController.allButtons);
router.get('/add-button', buttonController.addButton);
module.exports = router;
