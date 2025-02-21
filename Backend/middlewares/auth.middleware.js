const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blackListToken.model');
const captainModel = require('../models/captain.model');

const verifyToken = async (token, secret) => {
  if (!token || token.split('.').length !== 3) {
    throw new Error('Invalid token format');
  }
  return jwt.verify(token, secret);
};

module.exports.authUser = async (req, res, next) => {
  try {
    // Look for userToken specifically
    const token = req.cookies.userToken || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token }).lean();
    if (isBlacklisted) {
      return res.status(401).json({ message: 'Token is blacklisted. Please login again.' });
    }

    const decoded = await verifyToken(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("JWT Error:", err.message);
    let errorMessage = 'Unauthorized';
    if (err.message.includes('jwt expired')) errorMessage = 'Token expired. Please log in again.';
    else if (err.message.includes('invalid token')) errorMessage = 'Invalid token. Please log in again.';
    res.status(401).json({ message: errorMessage });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  try {
    // Look for captainToken specifically
    const token = req.cookies.captainToken || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token }).lean();
    if (isBlacklisted) {
      return res.status(401).json({ message: 'Token is blacklisted. Please login again.' });
    }

    const decoded = await verifyToken(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(401).json({ message: 'Captain not found' });
    }

    req.captain = captain;
    next();
  } catch (err) {
    console.error("JWT Error:", err.message);
    let errorMessage = 'Unauthorized';
    if (err.message.includes('jwt expired')) errorMessage = 'Token expired. Please log in again.';
    else if (err.message.includes('invalid token')) errorMessage = 'Invalid token. Please log in again.';
    res.status(401).json({ message: errorMessage });
  }
};
