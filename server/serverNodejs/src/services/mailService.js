const nodemailer = require('nodemailer');

const mailSenderService = ( ) => {
    // Tạo transporter với mật khẩu ứng dụng
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'giapvu4c@gmail.com',   // Email của bạn
            pass: 'xsbv pyrq ilxp wlow'       // Mật khẩu ứng dụng tạo từ Google
        }
    });

    const orderInfo = {
        orderId: '123456',
        customerName: 'Nguyễn Văn A',
        email: 'dohoanggiap2004@gmail.com',  // Thêm trường email
        items: [
            { product: 'Áo thun', quantity: 2, price: 100000 },
            { product: 'Quần jean', quantity: 1, price: 250000 }
        ],
        total: 450000,
        deliveryAddress: 'Số 10, Đường ABC, Quận XYZ, TP.HCM',
        paymentMethod: 'Thanh toán khi nhận hàng',
        shippingMethod: 'Giao hàng tiết kiệm'  // Thêm trường shippingMethod
    };


    // Cấu hình email
    const mailOptions = {
        from: 'giapvu4c@gmail.com',
        to: orderInfo.email,  // Địa chỉ email khách hàng
        subject: 'Xác nhận đơn hàng #' + orderInfo.orderId,
        html: `
    <h2>Chào ${orderInfo.customerName},</h2>
    <p>Cảm ơn bạn đã đặt hàng tại chúng tôi! Dưới đây là thông tin đơn hàng của bạn:</p>
    <h3>Chi tiết đơn hàng</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th style="border: 1px solid #ddd; padding: 8px;">Sản phẩm</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Số lượng</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Giá</th>
        </tr>
      </thead>
      <tbody>
        ${orderInfo.items.map(item => `
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${item.product}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${item.quantity}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${item.price.toLocaleString()} VND</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    <p><strong>Tổng tiền: </strong>${orderInfo.total.toLocaleString()} VND</p>
    <p><strong>Địa chỉ giao hàng: </strong>${orderInfo.deliveryAddress}</p>
    <p><strong>Phương thức thanh toán: </strong>${orderInfo.paymentMethod}</p>
    <p><strong>Phương thức vận chuyển: </strong>${orderInfo.shippingMethod}</p>
    <br>
    <p>Chúng tôi sẽ gửi thông tin giao hàng chi tiết cho bạn trong thời gian sớm nhất.</p>
    <p>Cảm ơn bạn đã mua sắm tại cửa hàng của chúng tôi!</p>
    <br>
    <p>Trân trọng,</p>
    <p><strong>Đội ngũ hỗ trợ khách hàng</strong></p>
  `
    };

    // Gửi email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

mailSenderService()

module.exports = mailSenderService;

