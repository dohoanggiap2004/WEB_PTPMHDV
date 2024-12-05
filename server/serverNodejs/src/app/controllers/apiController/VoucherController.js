const {
    getVouchersService,
    getVoucherByIdService,
    getVouchersByCodeService,
    createNewVoucherService,
    updateVoucherService,
    deleteVoucherService,
} = require('../../../services/voucherService')

class VoucherController {
    async getVouchers(req, res) {
        try {
            const vouchers = await getVouchersService()
            if (!vouchers) {
                return res.status(200).send('No voucher found')
            }
            res.status(200).json(vouchers)
        } catch (e) {
            console.log(e);
            res.status(500).send({error: e});
        }
    }

    async getVoucherById(req, res) {
        try {
            if (!req?.params?.voucherId) {
                return res.status(400).json({message: "Voucher id is required"});
            }
            const voucherId = req.params.voucherId;
            const voucher = await getVoucherByIdService(voucherId);
            if (!voucher) {
                return res.status(200).send('No voucher found')
            }
            res.status(200).json({voucher})
        } catch (e) {
            console.log(e)
            res.status(500).send({error: e});
        }
    }

    async createNewVoucher(req, res) {
        try {
            if(!req?.body){
                return res.status(400).send({message: "Voucher is required"});
            }

            const voucher = req.body;
            const newVoucher = await createNewVoucherService(voucher);

            res.status(201).json({
                newVoucher: newVoucher
            })
        } catch (e) {
            console.log(e)
            res.status(500).send({error: e});
        }
    }

    async updateVoucher(req, res) {
        try{
            if(!req?.body){
                return res.status(400).send({message: "Voucher is required"});
            }

            const voucher = req.body;
            const [result] = await updateVoucherService(voucher);

            if(result === 0){
                return res.status(200).send({message: "No voucher changed"});
            }

            res.status(200).json({
                rowEffected: result
            })
        }catch (e) {
            console.log(e)
            res.status(500).send({error: e});
        }
    }

    async deleteVoucher(req, res) {
        try{
            if(!req?.body){
                return res.status(400).send({message: "VoucherId is required"});
            }
            const voucherId = req.body.voucherId;
            const result = await deleteVoucherService(voucherId);

            if(result === 0){
                return res.status(200).send({message: "No voucher deleted"});
            }

            res.status(200).json({
                rowEffected: result
            })
        }catch (e) {
            console.log(e)
            res.status(500).send({error: e});
        }
    }

    async getVouchersByCode(req, res) {
        try {

            if (!req.query || !req.query.voucherCode) {
                return res.status(400).send({ message: "VoucherCode is required" });
            }

            const voucherCode = req.query.voucherCode;

            let vouchers;
            try {
                vouchers = await getVouchersByCodeService(voucherCode);
            } catch (serviceError) {
                console.log('Error in service:', serviceError);
                return res.status(500).send({ message: 'Error fetching vouchers from service' });
            }

            if (!vouchers) {
                return res.status(404).send({ message: "Voucher not found" });
            }

            res.status(200).json(vouchers);

        } catch (e) {
            console.log('Error:', e);
            res.status(500).send({ error: e.message });
        }
    }

}

module.exports = new VoucherController()
