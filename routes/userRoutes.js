const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
router.post('/login', userController.loginUser);
router.post('/logout', userController.logoutUser);
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/users/:id/blogs', userController.getUserBlogs);

module.exports = router;
