const mailSenderService = require('../../../services/mailService'); // Đường dẫn tới file service

const sendMail = (req, res) => {
    try {
        const { orderInfo, email, productsInfo } = req.body;

        // Kiểm tra dữ liệu
        if (!orderInfo || !email || !productsInfo) {
            return res.status(400).json({ message: 'Thiếu thông tin đơn hàng hoặc email' });
        }

        // Gửi email
        mailSenderService({ orderInfo, email, productsInfo });

        res.status(200).json({ message: 'Email đã được gửi thành công!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Lỗi khi gửi email', error: error.message });
    }
};

module.exports = {
    sendMail,
};
