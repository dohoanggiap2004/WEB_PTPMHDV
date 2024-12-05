const express = require('express');
const router = express.Router();
const StatisticsController = require('../../app/controllers/apiController/StatisticController');
const verifyRole = require('../../middlewares/verifyRoles');

router.get('/users', verifyRole('admin'), StatisticsController.countUser)
router.get('/revenue', verifyRole('admin'), StatisticsController.calculateRevenue)
router.get('/products', StatisticsController.countProductSales)
router.get('/available-product', verifyRole('admin'), StatisticsController.countAvailableProduct)
router.get('/orders', verifyRole('admin'), StatisticsController.countOrderQuantity)

module.exports = router;

