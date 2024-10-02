const {
  getUserDataByEmail,
  saveUserData,
} = require('../../models/users/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../constant');

// Sign up User
const signUpUser = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const user = await getUserDataByEmail(email);
    if (user) {
      return res.status(409).json({ error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await saveUserData({
      email,
      password: hashedPassword,
      name,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Sign up failed' });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await getUserDataByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = { loginUser, signUpUser };
