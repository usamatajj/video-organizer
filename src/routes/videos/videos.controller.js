const VideoService = require('../../models/videos/videos.service');

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

module.exports = {
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
};
