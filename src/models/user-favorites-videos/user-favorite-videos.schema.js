// models/user-favorites-videos/user-favorite-videos.schema.js
const { DataTypes } = require('sequelize');
const dbConnection = require('../../db');

const FavoriteVideos = dbConnection.define(
  'FavoriteVideos',
  {
    selfGranted: DataTypes.BOOLEAN,
  },
  { timestamps: false }
);

module.exports = FavoriteVideos;
