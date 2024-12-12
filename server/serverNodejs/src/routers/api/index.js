const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const statisticRouter = require('./statistic')
const voucherRouter = require('./voucher')
const orderRouter = require('./order')
const mailRouter = require('./mail')

router.use('/users', userRouter)
router.use('/statistics', statisticRouter)
router.use('/vouchers', voucherRouter)
router.use('/place-order', orderRouter)
router.use('/mail', mailRouter)

module.exports = router
