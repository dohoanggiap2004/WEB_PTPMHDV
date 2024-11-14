const express = require('express');
const router = express.Router();
const StatisticsController = require('../../app/controllers/apiController/StatisticController');

router.get('/users', StatisticsController.countUser)
router.get('/revenue', StatisticsController.calculateRevenue)
router.get('/products', StatisticsController.countProductSales)
router.get('/available-product', StatisticsController.countAvailableProduct)
router.get('/orders', StatisticsController.countOrderQuantity)

module.exports = router;

