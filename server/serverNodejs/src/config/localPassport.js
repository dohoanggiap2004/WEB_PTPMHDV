const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const passport = require("passport");
const pool = require("./dbConn"); // Import file db.js đã tạo ở trên

const localPassport = () => {
  passport.use(
    new LocalStrategy(async function verify(username, password, done) {
      const connection = await pool.getConnection();
      try {
        const sql = "SELECT * FROM users WHERE username = ?";
        const [results] = await connection.execute(sql, [username]);
        const user = results[0];

        if (!user) return done(null, false, { message: "No user found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return done(null, false, { message: "Wrong password" });

        return done(null, user);
      } catch (error) {
        console.log(error);
      } finally {
        if (connection) connection.release();
      }
    })
  );
};

module.exports = localPassport;
