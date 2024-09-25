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
