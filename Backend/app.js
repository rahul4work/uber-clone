const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

connectToDb();

// CORS Configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Update this with your frontend URL
    credentials: true, // Allow cookies and authentication headers
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Welcome to backend server of uberClone');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
