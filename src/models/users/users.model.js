const Video = require('../videos.model');
const User = require('./users.schema');

// Get all users
const getAllUsersData = async () => {
  return await User.findAll();
};

const getUserDataById = async (id) => {
  return await User.findByPk(id, { include: [{ model: Video, as: 'videos' }] });
};

const getUserDataByEmail = async (email) => {
  return await User.findOne(
    { where: { email: email } },
    { include: [{ model: Video, as: 'videos' }] }
  );
};

const saveUserData = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const updateUserData = async (userData) => {
  return await User.update(userData, {
    where: { id: userData.id },
  });
};

const deleteUserDataById = async (id) => {
  return await User.destroy({ where: { id } });
};

module.exports = {
  getAllUsersData,
  getUserDataById,
  saveUserData,
  updateUserData,
  deleteUserDataById,
  getUserDataByEmail,
};
