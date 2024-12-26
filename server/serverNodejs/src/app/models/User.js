// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelizeConnect');

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  fullname: {
    type: DataTypes.STRING(255),
  },
  phone: {
    type: DataTypes.STRING(255), // Khớp với kiểu dữ liệu trong bảng
  },
  dateOfBirth: {
    type: DataTypes.STRING(255), // Chỉnh lại kiểu dữ liệu theo bảng (varchar)
  },
  addressDetail: {
    type: DataTypes.STRING(255), // Thêm trường addressDetail
  },
  district: {
    type: DataTypes.STRING(255), // Thêm trường district
  },
  province: {
    type: DataTypes.STRING(255), // Thêm trường province
  },
  ward: {
    type: DataTypes.STRING(255), // Thêm trường ward
  },
  role: {
    type: DataTypes.STRING(255), // Chỉnh độ dài theo bảng
  },
  createdAt: {
    type: DataTypes.DATE(6), // Khớp với kiểu datetime(6)
  },
  updatedAt: {
    type: DataTypes.DATE(6), // Thêm trường updatedAt
  },
}, {
  tableName: 'users', // Đảm bảo trùng tên bảng trong MySQL
  timestamps: false,  // Không tự động tạo createdAt và updatedAt nếu chúng đã được định nghĩa
});

module.exports = User;


module.exports = User;
