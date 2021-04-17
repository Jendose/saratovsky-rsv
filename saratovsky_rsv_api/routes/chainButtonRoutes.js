const express = require('express');
const { model } = require('mongoose');
const chainButtonController = require('../controllers/chainButtonController');
const router = express.Router();

router.get('/get-chain', chainButtonController.getChain);
router.post('/add-chain', chainButtonController.addChain);

module.exports = router;
