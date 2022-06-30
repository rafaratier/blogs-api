const ErrorHandler = require('../utils/ErrorHandler');
const categoriesService = require('../services/categoriesService');
const postService = require('../services/postService');

const createPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    next(ErrorHandler.badRequest({ message: 'Some required fields are missing' }));
    return;
  }

  const categoriesCheck = await categoriesService.getCategoryById(categoryIds);

  if (categoriesCheck.length !== categoryIds.length) {
    next(ErrorHandler.badRequest({ message: '"categoryIds" not found' }));
    return;
  }

  const userId = req.user;

  const newPost = await postService.createPost(userId, title, content, categoryIds);

  res.status(201).json(newPost);
};

const getAllPosts = async (req, res) => {
  const allPosts = await postService.getAllPosts();

  res.status(200).json(allPosts);
};

module.exports = {
  createPost,
  getAllPosts,
};