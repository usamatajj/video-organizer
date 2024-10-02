const { DataTypes } = require('sequelize');
const dbConnection = require('../../db');
const User = require('../users/users.schema');
const Video = require('../videos.model');

const FavoriteVideos = dbConnection.define(
  'FavoriteVideos',
  { selfGranted: DataTypes.BOOLEAN },
  { timestamps: false }
);
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

FavoriteVideos.sync()
  .then(() => {
    console.log('Fav videos table created successfully!');
  })
  .catch((error) => {
    console.error('Error creating Fav videos table:', error);
  });

module.exports = { FavoriteVideos };
