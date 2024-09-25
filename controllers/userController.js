const User = require('../models/User');

// Create a user
exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate('blogs');
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get User ById
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('blogs');
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update User
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ error: "User not found" });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete User
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || user.password !== password) return res.status(401).json({ error: "Invalid credentials" });
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Logout User
exports.logoutUser = (req, res) => {
    // Invalidate the token client-side (handled by the frontend)
    res.status(200).json({ message: "Logout successful" });
};

// Get User Blogs
exports.getUserBlogs = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('blogs');
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user.blogs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
