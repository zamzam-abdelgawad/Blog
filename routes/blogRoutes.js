const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Blog Routes
router.get('/posts', blogController.getAllPosts);
router.post('/posts', blogController.createPost);
router.get('/posts/:id', blogController.getPostById);
router.put('/posts/:id', blogController.updatePost);
router.delete('/posts/:id', blogController.deletePost);

// Root Route
router.get('/', (req, res) => {
    res.send('Welcome to the Blog');
});

module.exports = router;
