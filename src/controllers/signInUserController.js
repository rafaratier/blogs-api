const usersServices = require('../services/usersServices');
const ErrorHandler = require('../utils/ErrorHandler');
const generateToken = require('../utils/generateToken');

const signInUser = async (req, res, next) => {
  const isSignedIn = await usersServices.signInUser(req.body);

  if (!isSignedIn) {
    next(ErrorHandler.badRequest({ message: 'Invalid fields' }));
    return;
  }

  const { email, password } = req.body;
  const token = await generateToken({ email, password });

  return res.status(200).json({ token });
};

module.exports = {
  signInUser,
};