const { DataTypes } = require('sequelize');
const dbConnection = require('../../db');

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

// Synchronize the model with the database
Video.sync()
  .then(() => {
    console.log('Video table created successfully!');
  })
  .catch((error) => {
    console.error('Error creating Video table:', error);
  });

module.exports = Video;
