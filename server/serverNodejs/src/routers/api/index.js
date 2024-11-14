const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const statisticRouter = require('./statistic')
const voucherRouter = require('./voucher')

router.use('/users', userRouter)
router.use('/statistics', statisticRouter)
router.use('/vouchers', voucherRouter)

module.exports = router
