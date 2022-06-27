const express = require('express');
const { createUser, getAllUsers } = require('../controllers/usersController');
const createUserValidation = require('../middlewares/createUserValidation');
const authValidation = require('../middlewares/authValidationMIddleware');

const usersRouter = express.Router();

usersRouter.post('/', createUserValidation, createUser);

usersRouter.use(authValidation);
usersRouter.get('/', getAllUsers);

module.exports = usersRouter;
