const {generateAccessToken, generateRefreshToken} = require('../../services/generateTokenService')
const passport = require('passport')
// const pool = require('../../config/dbConn')
const { sequelize } = require('../../config/sequelizeConnect')
class Authentication {
  //google oauth redirect
  async authenticateGoogle(req, res, next) {
    passport.authenticate("google", async (err, user, info) => {
      if (err) {
        console.log("Error during authentication:", err);
        return next(err);
      }
      if (!user) {
        console.log("Authentication failed:", info);
        return res.status(401).send(info);
      }
      console.log("User authenticated successfully:", user);

      // const connection = await pool.getConnection();
      try {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        const [
          result,
        ] = await sequelize.query(
            "INSERT INTO refreshtokens (token, userId) VALUES (?, ?)",
            {
              replacements: [refreshToken, user.userId],
            }
        );
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true, // Cookie chỉ được gửi qua HTTP (không thể truy cập qua JavaScript)
          secure: true, // Chỉ gửi cookie qua HTTPS
          sameSite: "Strict", // Ngăn tấn công CSRF
          maxAge: 7 * 24 * 60 * 60 * 1000, // Thời gian sống của cookie (7 ngày)
        });
        res.cookie("accessToken", accessToken, {
          httpOnly: false, // (cho phép truy cập qua JavaScript)
          secure: false,
          sameSite: "Strict", // Ngăn tấn công CSRF
          maxAge: 15 * 1000, // Thời gian sống của cookie 15s
        });
        return res.redirect('http://localhost:3000/')
      } catch (error) {
        console.log(error);
      } finally {
        // if (connection) connection.release()
      }
    })(req, res, next);
  }

  authenticateLocal(req, res, next) {
    passport.authenticate("local", async (err, user, info) => {
      if (err) {
        console.log("Error during authentication:", err);
        return next(err);
      }
      if (!user) {
        console.log("Authentication failed:", info);
        return res.status(401).send(info); // Error message sent here
      }
      console.log("User authenticated successfully:", user);

      try {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        const [
          result,
        ] = await sequelize.query(
            "INSERT INTO refreshtokens (token, userId) VALUES (?, ?)",
            {
              replacements: [refreshToken, user.userId],
            }
        );
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true, // Cookie chỉ được gửi qua HTTP (không thể truy cập qua JavaScript)
          secure: true, // Chỉ gửi cookie qua HTTPS
          sameSite: "Strict", // Ngăn tấn công CSRF
          maxAge: 7 * 24 * 60 * 60 * 1000, // Thời gian sống của cookie (7 ngày)
        });
        res.cookie("accessToken", accessToken, {
          httpOnly: false, // cho phép truy cập qua JavaScript)
          secure: false,
          sameSite: "Strict", // Ngăn tấn công CSRF
          maxAge: 15 * 60 * 1000, // Thời gian sống của cookie 15 phut
        });
        res.status(200).json({
          error: 0
        })

      } catch (error) {
        console.log(error);
      }
    })(req, res, next);
  }

  authenticateLocalAdmin(req, res, next) {
    passport.authenticate("local", async (err, user, info) => {
      if (err) {
        console.log("Error during authentication:", err);
        return next(err);
      }
      if (!user) {
        console.log("Authentication failed:", info);
        return res.status(401).send(info); // Error message sent here
      }
      if (user.role !== 'admin') {
        console.log('user role not match admin')
        return res.status(401).send('Unauthorized');
      }
      console.log("User authenticated successfully:", user);

      try {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        const [
          result,
        ] = await sequelize.query(
            "INSERT INTO refreshtokens (token, userId) VALUES (?, ?)",
            {
              replacements: [refreshToken, user.userId],
            }
        );
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true, // Cookie chỉ được gửi qua HTTP (không thể truy cập qua JavaScript)
          secure: true, // Chỉ gửi cookie qua HTTPS
          sameSite: "Strict", // Ngăn tấn công CSRF
          maxAge: 7 * 24 * 60 * 60 * 1000, // Thời gian sống của cookie (7 ngày)
        });
        res.cookie("accessToken", accessToken, {
          httpOnly: false, // cho phép truy cập qua JavaScript)
          secure: false,
          sameSite: "Strict", // Ngăn tấn công CSRF
          maxAge: 15 * 60 * 1000, // Thời gian sống của cookie 15 phut
        });
        res.status(200).json({
          error: 0
        })
      } catch (error) {
        console.log(error);
      }
    })(req, res, next);
  }
}

module.exports = new Authentication()
