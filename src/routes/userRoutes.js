const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/api/users', userController.getUsers);
router.post('/api/users', userController.addUser);
router.get('/api/users/:userId', userController.getUserById);

module.exports = router;
