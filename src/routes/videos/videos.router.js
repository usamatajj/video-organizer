const express = require('express');
const { validateVideos } = require('../../middlewares/videos/validation');
const {
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
} = require('./videos.controller');

const videosRouter = express.Router();

// GET /videos
videosRouter.get('/', getAllVideos);

// GET /videos/:id
videosRouter.get('/:id', getVideoById);

// POST /videos
videosRouter.post('/', validateVideos, createVideo);

// PUT /videos/:id
videosRouter.put('/:id', updateVideo);

// DELETE /videos/:id
videosRouter.delete('/:id', deleteVideo);

module.exports = videosRouter;
