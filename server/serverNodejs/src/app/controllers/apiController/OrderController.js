const { createOrderService } = require('../../../services/orderService')

class OrderController{

    async createOrder(req, res) {
        try {
            if (!req?.body)
                return res.status(400).json({ message: "Order information is required" });

            const {orderInfo, productsInfo} = req.body
            console.log('check orderinfo', orderInfo)
            console.log('check productInfo', productsInfo)

            const newOrder = await createOrderService(orderInfo, productsInfo);

            res.status(201).json({
                newOrder: newOrder,
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

}

module.exports = new OrderController();
