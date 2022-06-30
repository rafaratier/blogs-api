const express = require('express');
const categoriesRouter = require('./categoriesRouter');
const postRouter = require('./postRoutes');
const signInRouter = require('./signInRouter');
const usersRouter = require('./usersRouter');

const router = express.Router();

router.use('/login', signInRouter);
router.use('/user', usersRouter);
router.use('/categories', categoriesRouter);
router.use('/post', postRouter);

module.exports = router;