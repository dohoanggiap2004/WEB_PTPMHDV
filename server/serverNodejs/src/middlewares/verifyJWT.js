const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyJWT = (req, res, next) => {
    const token = req.cookies.accessToken
    if (!token) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(401); // Unauthorized
        req.user = user;
        console.log('verify jwwt successfully')
        next();
    });
};


module.exports = verifyJWT 