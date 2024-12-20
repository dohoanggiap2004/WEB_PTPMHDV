const express = require('express')
const router = express.Router()
const OrderController = require('../../app//controllers/apiController/OrderController')
const verifyRoles = require('../../middlewares/verifyRoles')

// router.get('/', verifyJWT, verifyRoles('user'), UserController.getUsers)
router.post('/', OrderController.createOrder)

module.exports = router
