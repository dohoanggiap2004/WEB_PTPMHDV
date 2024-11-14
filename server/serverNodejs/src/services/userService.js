const sequelize = require("../config/sequelizeConnect");
const User = require("../app//models/User");
const getUsersService = async () => {
  return await User.findAll();
};

const getUserByIdService = async (userId) => {
  return await User.findByPk(userId);
};

const createUserService = async (user) => {
  return await User.create(user);
};
const updateUserService = async (user) => {
    const { userId, ...updateFields } = user; 

    return await User.update(updateFields, {
      where: {
        userId: userId 
      }
    });
};

const deleteUserService = async (id) => {
  return await User.destroy({
    where: {
        userId: id
    }
  });
};

module.exports = { getUsersService, getUserByIdService, createUserService, updateUserService, deleteUserService, };
