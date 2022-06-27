const jwt = require('jsonwebtoken');

const validateToken = async (token) => {
  if (!token) return;

  const SECRET = process.env.JWT_SECRET;

  try {
    const validate = await jwt.verify(token, SECRET);
    return validate;
  } catch (error) {
    return null;
  }
};

module.exports = validateToken;