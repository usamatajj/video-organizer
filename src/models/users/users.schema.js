const { DataTypes } = require('sequelize');
const dbConnection = require('../../db');

const User = dbConnection.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  interests: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});

User.sync()
  .then(() => {
    console.log('User table created successfully!');
  })
  .catch((error) => {
    console.error('Error creating User table:', error);
  });

module.exports = User;
