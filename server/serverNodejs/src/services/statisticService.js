const {sequelize} = require('../config/sequelizeConnect')

//total quantity of user
const countUsersService = async () => {
    const [rows] = await sequelize.query('SELECT COUNT(*) AS userCount FROM users');
    return rows[0].userCount;
}

//total revenue of month
const calculateRevenueService = async () => {
    const [rows] = await sequelize.query('SELECT DATE_FORMAT(orderDate, \'%Y-%m\') AS month, SUM(totalPayment) AS' +
        ' totalRevenue FROM orders WHERE status = "Đã giao" GROUP BY  month ORDER BY month;');
    return [rows]
}

//total quantity of selling product desc
const countProductSalesService = async () => {
    const [rows] = await sequelize.query(
        'SELECT l.laptopId, l.model, b.brandName, l.price, l.stockQuantity, l.image, l.os, SUM(lo.quantity) AS' +
        ' totalQuantity \n '
        + 'FROM laptops_orders lo left join laptops l ON lo.laptopId = l.laptopId ' +
        'left join brands b ON l.brandId = b.brandId \n ' +
        'left join orders o ON lo.orderId = o.orderId ' +
        'WHERE o.status = "Đã giao"'
        + ' GROUP BY l.laptopId, l.model, l.price, b.brandName, l.os, l.stockQuantity \n'
        + 'ORDER BY totalQuantity DESC\n'
        + 'LIMIT :limit', {
            replacements: {
                limit: 10
            }
        });
    return [rows]
}

//count available products
const countAvailableProductsService = async () => {
    const [rows] = await sequelize.query('SELECT COUNT(*) AS avaiLaptops from laptops where stockQuantity != 0')
    return rows[0].avaiLaptops
}

//count total quantity of order
const countOrdersService = async () => {
    const [rows] = await sequelize.query('SELECT COUNT(*) as totalQuantityOrder FROM orders WHERE status != "Đã hủy"')
    const [rows2] = await sequelize.query('SELECT COUNT(*) as totalQuantityOrderSuccess FROM orders WHERE status =' +
        ' "Đã giao"')
    const data = {
        totalQuantityOrder: rows[0].totalQuantityOrder,
        totalQuantityOrderSuccess: rows2[0].totalQuantityOrderSuccess,
    }
    return data
}

module.exports = {
    countUsersService,
    calculateRevenueService,
    countProductSalesService,
    countAvailableProductsService,
    countOrdersService
}
