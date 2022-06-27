const express = require('express');
const signInRouter = require('./signInRouter');
const usersRouter = require('./usersRouter');

const router = express.Router();

router.use('/login', signInRouter);
router.use('/user', usersRouter);

module.exports = router;