const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/', require('./routes/blogRoutes')); 
app.use('/', require('./routes/userRoutes'));


// 404 Handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
