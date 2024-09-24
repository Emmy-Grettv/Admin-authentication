const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes  = require('./routes/authRoutes');

const app = express();

//1. MIDDLEWARES
app.use(cors());
app.use(express.json());

//2. ROUTE
app.use('/api/auth', authRoutes);

//3. MONGO DB CONNECTION
mongoose
.connect('mongodb://127.0.0.1:27017/authentcation')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Failed to connect to MongoDB:', error));

//4. GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status;

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

//5. SERVER
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started running on http://localhost:${PORT}`);
})