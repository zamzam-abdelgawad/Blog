const Blog = require('../models/Blog');

// Get All Posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Blog.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create a New Post
exports.createPost = async (req, res) => {
    try {
        const newPost = new Blog(req.body);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a Single Post
exports.getPostById = async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a Post
exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPost) return res.status(404).json({ error: 'Post not found' });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a Post
exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ error: 'Post not found' });
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

