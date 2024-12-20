const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelizeConnect');

const Order = sequelize.define('Order', {
    orderId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    completeDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    orderAddress: {
        type: DataTypes.STRING,
        allowNull: true
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    orderNote: {
        type: DataTypes.STRING,
        allowNull: true
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    shippingMethod: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true
    },
    totalPayment: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    userId: {
        type: DataTypes.CHAR(36),
        allowNull: true
    },
    voucherId: {
        type: DataTypes.BIGINT,
        allowNull: true
    }
}, {
    tableName: 'orders',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci'
});

module.exports = Order;
