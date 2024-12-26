const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require('../app/models/User')
const { v4: uuidv4 } = require('uuid');
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
                try {
                    const uuid = uuidv4()
                    const user = await User.findOrCreate({
                        where: { email: profile.emails[0].value }, // Search for user by email (or any unique field)
                        defaults: {
                            userId: uuid,
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
