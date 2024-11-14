const Voucher = require('../app/models/Voucher')
const {Sequelize} = require("sequelize");

const getVouchersService = async () => {
    return await Voucher.findAll()
}

const getVoucherByIdService = async (voucherId) => {
    return await Voucher.findByPk(voucherId)
}

const getVouchersByCodeService = async (voucherCode) => {
    return await Voucher.findAll({
        where: {
            voucherCode: {
                [Sequelize.Op.like]: `%${voucherCode}%`
            }
        }
    })
}

const createNewVoucherService = async (voucher) => {
    return await Voucher.create(voucher)
}

const updateVoucherService = async (voucher) => {
    const { voucherId, ...updateFields } = voucher;
    return await Voucher.update(updateFields, {
        where: {
            voucherId: voucherId
        }
    })
}

const deleteVoucherService = async (voucherId) => {
    return await Voucher.destroy({
        where: {
            voucherId: voucherId
        }
    })
}

module.exports = { getVouchersService, getVoucherByIdService, getVouchersByCodeService, createNewVoucherService, updateVoucherService, deleteVoucherService };


