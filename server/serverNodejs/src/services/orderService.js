const {sequelize} = require("../config/sequelizeConnect");
const Order = require("../app/models/order");
const Order_Laptop = require("../app/models/order_laptop");
const createOrderService = async (orderInfo, productsInfo) => {
    const t = await sequelize.transaction();
    try {
        const newOrder = await Order.create(orderInfo, {transaction: t})

        //get order id before create new order
        const products_order = productsInfo.map(product => {

            return {
                orderId: newOrder.orderId,
                laptopId: product.laptopId,
                quantity: product.quantity,
                totalPrice: product.specialPrice !== 0 ? product.specialPrice * product.quantity : product.price * product.quantity,
            }
        })

        const newProductOrder = await Order_Laptop.bulkCreate(products_order, {transaction: t})
        data = {
            newOrder: newOrder,
            newProductOrder: newProductOrder,
        }

        await t.commit()
        return data
    } catch (error) {
        await t.rollback()
        console.error('Error in createOrder:', error);
        // Ném lỗi lên controller hoặc trả về một object lỗi nếu cần thiết
        throw new Error('Unable to create order');
    }
};

module.exports = {createOrderService};
