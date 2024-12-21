const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelizeConnect');

const View_History = sequelize.define('View_History', {
    userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    laptopId:{
        type: DataTypes.CHAR(36),
        allowNull: false,
    },
},
    {
        timestamps: true,
        tableName: 'view_history',
    })

module.exports = View_History;
