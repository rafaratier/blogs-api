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

module.exports = {
  createCategory,
};