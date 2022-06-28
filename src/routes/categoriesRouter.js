const express = require('express');
const { createCategory, getAllCategories } = require('../controllers/categoriesController');
const authValidation = require('../middlewares/authValidationMIddleware');

const categoriesRouter = express.Router();

categoriesRouter.use(authValidation);

categoriesRouter.post('/', createCategory);
categoriesRouter.get('/', getAllCategories);

module.exports = categoriesRouter;
