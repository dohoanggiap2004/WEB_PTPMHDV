const express = require('express');
const router = express.Router();
const ViewHistoryController = require('../../app/controllers/apiController/ViewHistoryController');
const verifyRole = require('../../middlewares/verifyRoles');

router.post('/', ViewHistoryController.createNewView)

// router.get('/', VoucherController.getVouchers)
// router.get('/search',  VoucherController.getVouchersByCode)
// // router.get('/:voucherId', VoucherController.getVoucherById)
// router.post('/', VoucherController.createNewVoucher)
// router.put('/', VoucherController.updateVoucher)
// router.delete('/', VoucherController.deleteVoucher)


module.exports = router
