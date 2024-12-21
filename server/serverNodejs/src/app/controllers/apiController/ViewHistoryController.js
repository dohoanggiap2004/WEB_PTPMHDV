const {
    createNewViewService
} = require('../../../services/viewService')
const ViewHistory = require('../../models/View_History')

class ViewHistoryController {

    async createNewView(req, res) {
        try {
            if (!req?.body) {
                return res.status(400).send({ message: "View info is required" });
            }

            const view = req.body;

            // Kiểm tra nếu đã tồn tại
            const existingView = await ViewHistory.findOne({
                where: {
                    userId: view.userId,
                    laptopId: view.laptopId,
                },
            });

            if (existingView) {
                // Xóa bản ghi nếu tồn tại
                await existingView.destroy();
            }

            // Tạo bản ghi mới
            const newView = await createNewViewService(view);

            res.status(201).json({
                newView: newView,
            });
        } catch (e) {
            console.error(e);
            res.status(500).send({ error: e });
        }
    }


}

module.exports = new ViewHistoryController()
