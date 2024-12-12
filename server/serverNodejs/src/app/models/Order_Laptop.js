const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelizeConnect');

const OrderLaptop = sequelize.define('OrderLaptop', {
    laptopId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    orderId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'orders_laptops',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci'
});

module.exports = OrderLaptop;
