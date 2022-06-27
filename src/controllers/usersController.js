const usersServices = require('../services/usersServices');
const ErrorHandler = require('../utils/ErrorHandler');

const createUser = async (req, res, next) => {
  const isMember = await usersServices.checkForMembership(req.body);

  if (isMember) {
    next(ErrorHandler.conflict({ message: 'User already registered' }));
    return;
  }

  const token = await usersServices.createUser(req.body);

  res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const allUsers = await usersServices.getAllUsers();
  res.status(200).json(allUsers);
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const user = await usersServices.getUserById(id);

  if (!user) {
    next(ErrorHandler.notFound({ message: 'User does not exist' }));
    return;
  }

  res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};