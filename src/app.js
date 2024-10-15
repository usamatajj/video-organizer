const path = require('path');
const express = require('express');
const morgan = require('morgan');

const usersRouter = require('./routes/users/users.router');
const videosRouter = require('./routes/videos/videos.router');
const authRouter = require('./routes/auth/auth.router');

const authMiddleware = require('./middlewares/auth/authMiddleware');

const app = express();
// Logging
// app.use(morgan("combined"));
app.use(express.json());
// Routes
app.use('/users', authMiddleware, usersRouter);
app.use('/videos', authMiddleware, videosRouter);
app.use('/auth', authRouter);

module.exports = app;
