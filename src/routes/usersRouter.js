const express = require('express');
const { createUser } = require('../controllers/usersController');
const createUserValidation = require('../middlewares/createUserValidation');

const usersRouter = express.Router();

usersRouter.post('/', createUserValidation, createUser);

module.exports = usersRouter;
