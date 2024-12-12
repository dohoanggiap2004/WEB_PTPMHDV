const jwt = require('jsonwebtoken');
require('dotenv').config()
const generateAccessToken = (user) => {
    return jwt.sign({ userId: user.userId, username: user.username, role: user.role}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ userId: user.userId, username: user.username, role: user.role }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
} 

module.exports = { generateAccessToken, generateRefreshToken }
