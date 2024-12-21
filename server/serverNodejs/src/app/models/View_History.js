const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelizeConnect');

const View_History = sequelize.define('View_History', {
    userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
    },
    laptopId:{
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
    },
},
    {
        timestamps: true,
        tableName: 'view_history',
    })

module.exports = View_History;
