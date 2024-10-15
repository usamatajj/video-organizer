// models/videos.model.js
const { DataTypes } = require('sequelize');
const dbConnection = require('../db');
const FavoriteVideos = require('./user-favorites-videos/user-favorite-videos.schema');
const User = require('./users/users.schema');

const Video = dbConnection.define(
  'Video',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

// Define the associations
User.belongsToMany(Video, {
  through: FavoriteVideos,
  as: 'videos',
  foreignKey: 'userId',
  otherKey: 'videoId',
});

Video.belongsToMany(User, {
  through: FavoriteVideos,
  as: 'users',
  foreignKey: 'videoId',
  otherKey: 'userId',
});

module.exports = Video;
