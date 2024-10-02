const express = require('express');
const {
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
  addToFavorite,
} = require('./videos.controller');

const videosRouter = express.Router();

// GET /videos
videosRouter.get('/', getAllVideos);

// GET /videos/:id
videosRouter.get('/:id', getVideoById);

// POST /videos
videosRouter.post('/', createVideo);

// PUT /videos/:id
videosRouter.put('/:id', updateVideo);

// DELETE /videos/:id
videosRouter.delete('/:id', deleteVideo);

// Add To Favorite /videos/:id
videosRouter.patch('/:id/add-to-favorite', addToFavorite);

module.exports = videosRouter;
