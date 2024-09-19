const express = require('express');

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('./users.controller');

const usersRouter = express.Router();

// GET /users
usersRouter.get('/', getAllUsers);

// GET /users/:id
usersRouter.get('/:id', getUserById);

// POST /users
usersRouter.post('/', createUser);

// PUT /users/:id
usersRouter.put('/:id', updateUser);

// DELETE /users/:id
usersRouter.delete('/:id', deleteUser);

module.exports = usersRouter;
