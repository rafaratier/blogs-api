const {
  BlogPost,
  PostCategory,
  sequelize,
} = require('../database/models');

const createPost = async (userId, title, content, categoriesId) => {
  const transaction = await sequelize.transaction();

  const newPost = await BlogPost.create({ title, content, userId },
  { transaction });

  await PostCategory.bulkCreate(categoriesId.map((id) => (
    {
      postId: newPost.id,
      categoryId: id,
    }
  )), {
    transaction,
  });

  await transaction.commit();

  return newPost.dataValues;
};

module.exports = {
  createPost,
};