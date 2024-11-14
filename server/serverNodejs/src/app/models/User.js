// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelizeConnect');

const User = sequelize.define('Users', {
    userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  fullname: {
    type: DataTypes.STRING(255)
  },
  // gender: {
  //   type: DataTypes.STRING(30)
  // },
  phone: {
    type: DataTypes.STRING(15)
  },
  date_of_birth: {
    type: DataTypes.DATEONLY
  },
  // typeAcc: {
  //   type: DataTypes.STRING(50)
  // },
  // role: {
  //   type: DataTypes.STRING(50)
  // },
  created_at:{
    type: DataTypes.DATEONLY
  }
}, {
  tableName: 'Users',
  timestamps: false
});

module.exports = User;
