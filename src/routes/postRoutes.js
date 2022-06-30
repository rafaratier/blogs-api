const express = require('express');
const {
  createPost,
} = require('../controllers/postController');
const authValidation = require('../middlewares/authValidationMiddleware');
const getAuthenticatedUser = require('../middlewares/getAuthenticatedUser');

const postRouter = express.Router();

postRouter.use(authValidation);
postRouter.use(getAuthenticatedUser);

postRouter.post('/', createPost);

module.exports = postRouter;