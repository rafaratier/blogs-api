const { User } = require('../database/models');
const generateToken = require('../utils/generateToken');

const checkForMembership = async ({ email }) => {
  const isMember = await User.findOne({ where: { email } });

  if (!isMember) { return null; }

  return isMember;
};

const createUser = async (userData) => {
  const { dataValues } = await User.create(userData);
  const newUser = {
    id: dataValues.id,
    displayName: dataValues.displayName,
    email: dataValues.email,
    image: dataValues.image,
  };

  return generateToken(newUser);
};

const signInUser = async ({ email, password }) => {
  const dataValues = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email, password },
  });

  return dataValues;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return allUsers;
};

const getUserById = async (id) => {
  const getUser = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { id },
  });

  return getUser;
};

const deleteUser = async (userId) => {
  await User.destroy({
    where: { id: userId },
  });
};

module.exports = {
  checkForMembership,
  createUser,
  signInUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
