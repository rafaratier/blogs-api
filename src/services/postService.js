const {
  BlogPost,
  PostCategory,
  User,
  Category,
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

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      {
        attributes: { exclude: ['password'] },
        as: 'user',
        model: User,
      },
      {
        attributes: { exclude: ['PostCategory'] },
        as: 'categories',
        model: Category,
      },
    ],
  });

  return allPosts;
};

const getPostById = async (postId) => {
  const post = await BlogPost.finOne({
    include: [
      {
      attributes: { exclude: ['password'] },
      as: 'user',
      model: User,
    },
    {
      attributes: { exclude: ['PostCategory'] },
      as: 'categories',
      model: Category,
    },
    ],
    where: { postId },
  });

  return post;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};