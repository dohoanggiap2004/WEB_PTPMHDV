const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require('../app/models/User')
const pool = require("./dbConn");
require("dotenv").config();
const googlePassport = () => {
passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CB,
        accessType: 'offline', // Bắt buộc để nhận refreshToken
        prompt: 'consent',
      },
      async (accessToken, refreshToken, profile, cb) => {
        // use sql query
        // const connection = await pool.getConnection();
        // try {
        //   const [rows] = await connection.execute(
        //     "SELECT * FROM users WHERE email = ? LIMIT 1",
        //     [profile.emails[0].value]
        //   );

        //   let user;

        //   if (rows.length > 0) {
        //     // Nếu người dùng đã tồn tại
        //     user = rows[0];
        //   } else {
        //     // Nếu không tìm thấy người dùng, tạo mới
        //     const [result] = await connection.execute(
        //       `INSERT INTO users (username, email, fullname, password, dob, phoneNumber, typeAcc) 
        //        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        //       [
        //         profile.displayName,
        //         profile.emails[0].value,
        //         profile.displayName,
        //         "N/A", // Placeholder cho password trong OAuth
        //         null, // Không có ngày sinh từ OAuth
        //         null, // Không có số điện thoại từ OAuth
        //         "google", // Định danh loại tài khoản OAuth
        //       ]
        //     );

        //     // Truy vấn lại để lấy thông tin người dùng vừa được tạo
        //     const [newUserRows] = await connection.execute("SELECT * FROM users WHERE userId = ?", [
        //       result.insertId,
        //     ]);

        //     user = newUserRows[0];
        //   }
        //   return cb(null, user); // Chuyển người dùng vào callback
        // } catch (error) {
        //   console.error("Error during Google authentication:", error);
        //   return cb(error); // Chuyển lỗi vào callback
        // } finally {
        //   if (connection) connection.release(); // Giải phóng kết nối
        // }

        //use sequelize
        try {
          const user = await User.findOrCreate({
            where: { email: profile.emails[0].value }, // Search for user by email (or any unique field)
            defaults: { 
              username: profile.displayName, 
              email: profile.emails[0].value, 
              fullname: profile.displayName, 
              password: 'N/A', // Placeholder since password might not be used in OAuth
              dob: null, // Default value for fields you don't have in OAuth profile
              phoneNumber: null,
              typeAcc: 'google' // Or another identifier for OAuth account type
            }})
            // console.log('check user', user[0])
            return cb(null, user[0]);
        } catch (error) {
            console.log(error)
        }
      }
    )
  );
};

module.exports = googlePassport;
