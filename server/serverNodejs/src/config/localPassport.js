const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const passport = require("passport");
const {sequelize} = require("../config/sequelizeConnect");
const localPassport = () => {
    passport.use(
        new LocalStrategy(async function verify(username, password, done) {
            try {
                const sql = "SELECT * FROM users WHERE username = ?";
                const [results] = await sequelize.query(sql, {
                    replacements: [username],
                });
                const user = results[0];

                if (!user) return done(null, false, {message: "No user found"});
                console.log('check user', user)
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) return done(null, false, {message: "Wrong password"});

                return done(null, user);
            } catch (error) {
                console.log(error);
            }
        })
    );
};

module.exports = localPassport;
