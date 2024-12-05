const express = require('express');
const router = express.Router();
const VoucherController = require('../../app/controllers/apiController/VoucherController');
const verifyJWT = require('../../middlewares/verifyJWT');
const verifyRole = require('../../middlewares/verifyRoles');

router.get('/', verifyRole('admin', 'user'), VoucherController.getVouchers)
router.get('/search', verifyRole('admin'), VoucherController.getVouchersByCode)
// router.get('/:voucherId', VoucherController.getVoucherById)
router.post('/', verifyRole('admin'), VoucherController.createNewVoucher)
router.put('/', verifyRole('admin'), VoucherController.updateVoucher)
router.delete('/', verifyRole('admin'), VoucherController.deleteVoucher)

module.exports = router
