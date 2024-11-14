const express = require('express')
const router = express.Router()
const UserController = require('../../app//controllers/apiController/UserController')
const verifyJWT = require('../../middlewares/verifyJWT')
const verifyRoles = require('../../middlewares/verifyRoles')

// router.get('/', verifyJWT, verifyRoles('user'), UserController.getUsers)
router.get('/', UserController.getUsers)
router.get('/:userId', UserController.getUserById)
router.post('/', UserController.createUser)
router.put('/', UserController.updateUser)
router.delete('/', UserController.deleteUser)

module.exports = router
