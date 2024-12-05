const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyJWT = (req, res, next) => {
    console.log('check cookies', req.cookies)
    const token = req.cookies.accessToken
    if (!token) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(401); // Unauthorized
        // req.user = user;
        console.log('verify jwt successfully')
        req.headers["x-user-info"] = user.role;
        next();
    });
};


module.exports = verifyJWT
