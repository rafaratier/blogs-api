const express = require('express');
const sigInUserValidation = require('../middlewares/signInUserValidation');
const { signInUser } = require('../controllers/signInUserController');

const signInRouter = express.Router();

signInRouter.post('/', sigInUserValidation, signInUser);

module.exports = signInRouter;
