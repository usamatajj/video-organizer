// middlewares/validation.js
const { body, validationResult } = require('express-validator');

const validateVideos = [
  body('description')
    .exists()
    .withMessage('Description is required')
    .bail()
    .isString()
    .withMessage('Description must be a string'),
  body('url')
    .exists()
    .withMessage('URL is required')
    .bail()
    .isURL()
    .withMessage('URL must be a valid URL'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateVideos };
