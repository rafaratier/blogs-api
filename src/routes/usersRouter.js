const express = require('express');
const {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
} = require('../controllers/usersController');
const createUserValidation = require('../middlewares/createUserValidation');
const authValidation = require('../middlewares/authValidationMiddleware');
const getAuthenticatedUser = require('../middlewares/getAuthenticatedUser');

const usersRouter = express.Router();

usersRouter.post('/', createUserValidation, createUser);

usersRouter.use(authValidation);
usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);
usersRouter.delete('/me', getAuthenticatedUser, deleteUser);

module.exports = usersRouter;
