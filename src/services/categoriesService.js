const { Category } = require('../database/models');

const createCategory = async (categoryName) => {
  const newCategory = await Category.findOrCreate({
    where: { name: categoryName },
    defaults: {
      name: categoryName,
    },
  });

  return newCategory[0].dataValues;
};

module.exports = {
  createCategory,
};