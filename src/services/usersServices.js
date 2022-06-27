const { User } = require('../database/models');
const generateToken = require('../utils/generateToken');

const checkForMembership = async ({ email }) => {
  const isMember = await User.findOne({ where: { email } });

  if (isMember) { return true; }

  return null;
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

module.exports = {
  checkForMembership,
  createUser,
};
