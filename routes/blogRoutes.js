const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Blog Routes
router.get('/posts', blogController.getAllPosts);
router.post('/posts', blogController.createPost);

// Root Route
router.get('/', (req, res) => {
    res.send('Welcome to the Blog');
});

module.exports = router;
