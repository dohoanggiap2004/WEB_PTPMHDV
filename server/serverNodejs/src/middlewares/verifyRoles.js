const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.user) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        // verify array roles
        // const result = req.user.role
        //     .map((role) => rolesArray.includes(role))
        //     .find((val) => val === true);

        //verify only role
        const result = rolesArray.includes(req.user.role);

        if (!result) return res.sendStatus(403); //forbidden
        console.log('verify role successfully')
        next();
    };
};

module.exports = verifyRoles;