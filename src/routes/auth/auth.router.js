const express = require('express');
const { loginUser, signUpUser } = require('./auth.controller');

const authRouter = express.Router();

authRouter.post('/login', loginUser);

authRouter.post('/signup', signUpUser);

module.exports = authRouter;
