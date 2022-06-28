const { Category } = require('../database/models');

const createCategory = async (categoryName) => {
  const newCategory = await Category.findOrCreate({
    where: { name: categoryName },
  });

  return newCategory;
};

module.exports = {
  createCategory,
};