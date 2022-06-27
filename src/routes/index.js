const express = require('express');
const usersRouter = require('./usersRouter');

const router = express.Router();

router.use('/user', usersRouter);

module.exports = router;