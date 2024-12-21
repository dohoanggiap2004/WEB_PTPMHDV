const ViewHistory = require('../app/models/View_History')
const {Sequelize} = require("sequelize");

const createNewViewService = async (view) => {
    return await ViewHistory.create(view)
}


module.exports = { createNewViewService };


