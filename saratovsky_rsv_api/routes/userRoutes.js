const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/add-user', userController.addUser);
router.get('/all-users', userController.allUsers);
router.post('/add-user', userController.postAddUser);
router.get('/:id', userController.getById);
router.delete('/:id', userController.deleteById);

module.exports = router;
