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

const getPostById = async (req, res, next) => {
  const { id } = req.params;

  const post = await postService.getPostById(id);

  if (!post) {
    next(ErrorHandler.notFound({ message: 'Post does not exist' }));
    return;
  }

  res.status(200).json(post);
};

const updatePost = async (req, res, next) => {
  const userId = req.user;
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title || !content) {
    next(ErrorHandler.badRequest({ message: 'Some required fields are missing' }));
    return;
  }

  const isPostUpdated = await postService.updatePost(userId, id, title, content);

  if (isPostUpdated[0] === 0) {
    next(ErrorHandler.unauthorized({ message: 'Unauthorized user' }));
    return;
  }

  const updatedPost = await postService.getPostById(id);

  res.status(200).json(updatedPost);
};

const deletePost = async (req, res, next) => {
  const userId = req.user;
  const { id } = req.params;

  const hasPost = await postService.getPostById(id);

  if (!hasPost) {
    next(ErrorHandler.notFound({ message: 'Post does not exist' }));
    return;
  }

  const isPostDeleted = await postService.deletePostById(userId, id);

  if (isPostDeleted === 0) {
    next(ErrorHandler.unauthorized({ message: 'Unauthorized user' }));
    return;
  }

  res.status(204).end();
};

const searchInPosts = async (req, res) => {
  const query = req.query.q;

  const foundPosts = await postService.searchInPosts(query);

  res.status(200).json(foundPosts);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchInPosts,
};