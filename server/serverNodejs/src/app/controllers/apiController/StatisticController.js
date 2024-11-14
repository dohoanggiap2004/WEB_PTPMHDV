const { countUsersService, calculateRevenueService, countProductSalesService, countAvailableProductsService, countOrdersService } = require('../../../services/statisticService')
class StatisticController{

    async countUser(req, res){
        try {
            const userQuantity = await countUsersService()
            if(!userQuantity){
                res.status(404).send('User Not Found')
            }
            res.status(200).json({
                data: userQuantity,
            })
        }catch (e) {
            console.error(e)
            res.status(500).send({message: 'Internal Server Error'})
        }

    }

    async calculateRevenue(req, res){
        try{
            const [data] = await calculateRevenueService()
            if(!data){
                res.status(404).send('Revenue Not Found')
            }
            res.status(200).json({
                data: data,
            })
        }catch (e){
            console.error(e)
            res.status(500).send({message: 'Internal Server Error'})
        }
    }

    async countProductSales(req, res){
        try {
            const [data] = await countProductSalesService()
            console.log('check data', data)
            if(!data){
                res.status(404).send('ProductSales Not Found')
            }
            res.status(200).json({
                data: data,
            })
        }catch (e) {
            console.error(e)
            res.status(500).send({message: 'Internal Server Error'})
        }
    }

    async countAvailableProduct(req, res){
        try{
            const data = await countAvailableProductsService()
            if(!data){
                res.status(404).send('Products Not Found')
            }
            res.status(200).json({
                data: data,
            })
        }catch (e){
            console.error(e)
            res.status(500).send({message: 'Internal Server Error'})
        }
    }

    async countOrderQuantity(req, res){
        try {
            const data = await countOrdersService()
            if(!data){
                res.status(404).send('Order Not Found')
            }
            res.status(200).json({
                data: data,
            })
        }catch (e){
            console.error(e)
            res.status(500).send({message: 'Internal Server Error'})
        }
    }
}

module.exports = new StatisticController();
