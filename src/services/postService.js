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
  const post = await BlogPost.findOne({
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
    where: { id: postId },
  });

  return post;
};

const updatePost = async (userId, postId, title, content) => {
  const updatedPost = await BlogPost.update({
    title,
    content,
  },
  {
    where: { id: postId, userId },
  });

  return updatedPost;
};

const deletePostById = async (userId, postId) => {
  const deletedPost = await BlogPost.destroy(
  {
    where: { id: postId, userId },
  },
);

  return deletedPost;
};

const searchInPosts = async (query) => {
  const { Op } = sequelize;
  const foundPosts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        {
          title: { [Op.substring]: query },
        },
        {
          content: { [Op.substring]: query },
        },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: ['PostCategory'] } },
    ],
  });

  return foundPosts;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePostById,
  searchInPosts,
};