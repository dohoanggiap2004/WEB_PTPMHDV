const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../app/models/User');
const {sequelize} = require('../config/sequelizeConnect');
const { v4: uuidv4 } = require('uuid');

router.post('/auth/register', async (req, res) => {
    const {username, password, ...userInfo} = req.body;

    try {
        console.log('Connect successfully');
        console.log('check username', username)
        // Kiểm tra xem người dùng đã tồn tại chưa
        const [results] = await sequelize.query('SELECT * FROM users WHERE username = ?', {
            replacements: [username],
        });
        console.log(results);
        if (results.length > 0) {
            return res.status(400).send('Username already exists');
        }

        // Tạo UUID 36 ký tự
        const uuid = uuidv4();

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Lưu người dùng mới vào cơ sở dữ liệu
        await User.create({
            userId: uuid,
            username: username,
            password: hashedPassword,
            ...userInfo,
        })
        console.log('User registered successfully');
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.log('Error registering user:', err);
        res.status(500).send('Server error');
    }
});

module.exports = router
