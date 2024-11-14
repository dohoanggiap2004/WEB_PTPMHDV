const {sequelize} = require('../../config/sequelizeConnect')
const {DataTypes} = require("sequelize");

const Voucher = sequelize.define('Vouchers', {
        voucherId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        voucherCode: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        voucherDiscount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(255),
        }
    }, {
        tableName: 'Vouchers',
        timestamps: false,
    }
)

module.exports = Voucher;
