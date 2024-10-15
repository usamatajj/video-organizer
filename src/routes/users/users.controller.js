const {
  getAllUsersData,
  getUserDataById,
  saveUserData,
  updateUserData,
} = require('../../models/users/users.service');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await getAllUsersData();
    res.json(allUsers);
  } catch (error) {
    console.log('🚀 ~ getAllUsers ~ error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await getUserDataById(parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = await saveUserData(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a user by ID
const updateUser = async (req, res) => {
  try {
    const user = await updateUserData(req.body);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const user = await deleteUserDataById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
