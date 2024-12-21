const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelizeConnect');

const Laptop = sequelize.define('Laptop', {
    laptopId: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
    },
    battery: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cpu: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    frameRate: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    manufacturer: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    os: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ram: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    resolution: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    screenSize: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    stockAvailable: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    storage: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    vga: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    webcam: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    specialPrice: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'laptops',
    timestamps: false,
});

module.exports = Laptop;
