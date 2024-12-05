const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        console.log(1)
        console.log('2', req.headers)
        const userRole = req.headers['x-user-info'];
        console.log('check user role', userRole);
        if (!userRole) return res.sendStatus(401);

        if (!allowedRoles.includes(userRole)) {
            return res.sendStatus(403); // Forbidden nếu vai trò không hợp lệ
        }

        console.log('verify role successfully')
        next();
    };
};

module.exports = verifyRoles;
