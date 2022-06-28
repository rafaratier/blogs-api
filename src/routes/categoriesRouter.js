const express = require('express');
const { createCategory } = require('../controllers/categoriesController');
const authValidation = require('../middlewares/authValidationMIddleware');

const categoriesRouter = express.Router();

categoriesRouter.use(authValidation);

categoriesRouter.post('/', createCategory);

module.exports = categoriesRouter;
