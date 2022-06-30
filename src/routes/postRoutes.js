const express = require('express');
const {
  createPost, getAllPosts, getPostById, updatePost, deletePost,
} = require('../controllers/postController');
const authValidation = require('../middlewares/authValidationMiddleware');
const getAuthenticatedUser = require('../middlewares/getAuthenticatedUser');

const postRouter = express.Router();

postRouter.use(authValidation);
postRouter.use(getAuthenticatedUser);

postRouter.post('/', createPost);
postRouter.get('/', getAllPosts);
postRouter.get('/:id', getPostById);
postRouter.put('/:id', updatePost);
postRouter.delete('/:id', deletePost);

module.exports = postRouter;