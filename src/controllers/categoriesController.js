const ErrorHandler = require('../utils/ErrorHandler');
const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    next(ErrorHandler.badRequest({ message: '"name" is required' }));
    return;
  }

  const category = await categoriesService.createCategory(name);

  res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
  const allCategories = await categoriesService.getAllCategories();

  res.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  getAllCategories,
};