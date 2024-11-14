require('dotenv').config()
const jwt = require('jsonwebtoken')
const { generateAccessToken } = require('../../services/generateTokenService')
const { sequelize } = require('../../config/sequelizeConnect')
class RefreshTokenController{
    async handleRefreshToken(req, res){
        const token = req.cookies.refreshToken;  // Retrieve the refresh token from cookies
        console.log('check token', token)
        if (!token) return res.sendStatus(401);  // No token provided
    
        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
            if (err) {
                // If token is expired or invalid
                const [results] = await sequelize.query('DELETE FROM refreshtokens WHERE token = ?',{
                    replacements: [token]
                });
    
                return res.status(403).json({ message: 'Refresh token expired, please log in again' });
            }
    
            // Generate a new access token
            const accessToken = generateAccessToken(user);
            res.cookie('accessToken', accessToken, {
                httpOnly: false, // Cookie chỉ có thể được truy cập thông qua HTTP (không thể truy cập bằng JavaScript)
                secure: false,   // Cookie chỉ được gửi qua HTTPS (nên sử dụng trong môi trường production)
                sameSite: 'Strict', // Bảo vệ CSRF
                maxAge: 15 * 60 * 1000 // Thời gian tồn tại của cookie (15 phút)
            });
            res.send(accessToken)
        });
    }
}

module.exports = new RefreshTokenController()