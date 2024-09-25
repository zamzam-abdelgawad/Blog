const mongoose = require('mongoose');
const connectDB = async () => {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
    console.log('MongoDB connected');
};
module.exports = connectDB;
