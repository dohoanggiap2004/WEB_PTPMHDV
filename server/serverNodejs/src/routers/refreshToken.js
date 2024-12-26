const express = require('express')
const router = express.Router()
const RefreshTokenController = require('../app//controllers/RefreshTokenController')

router.get('/refresh-token', RefreshTokenController.handleRefreshToken)

module.exports = router
