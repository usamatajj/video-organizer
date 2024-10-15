const User = require('../../models/users/users.model');
const VideoService = require('../../models/videos/videos.service');
const Video = require('../../models/videos/videos.model');

// Get all videos
const getAllVideos = async (req, res) => {
  try {
    const allVideos = await VideoService.getAllVideos();
    res.json(allVideos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single video by ID
const getVideoById = async (req, res) => {
  try {
    const video = await VideoService.getVideoById(req.params.id);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json(video);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new video
const createVideo = async (req, res) => {
  try {
    const video = await VideoService.createVideo(req.body);
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a video by ID
const updateVideo = async (req, res) => {
  try {
    const video = await VideoService.updateVideo(req.params.id, req.body);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json(video);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a video by ID
const deleteVideo = async (req, res) => {
  try {
    const video = await VideoService.deleteVideo(req.params.id);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const addToFavorite = async (req, res) => {
  try {
    const userId = parseInt(req.body.userId);
    const videoId = parseInt(req.params.id);
    const user = await User.findByPk(userId);
    const video = await Video.findByPk(videoId);
    await user.addVideo(video, { through: { selfGranted: true } });
    res.json({ message: 'Video added to favorites' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
  addToFavorite,
};
