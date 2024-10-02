const User = require('../../models/users/users.schema');
const Video = require('../../models/videos.model');

// Get all videos
const getAllVideos = async (req, res) => {
  try {
    const allVideos = await Video.findAll();
    res.json(allVideos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single video by ID
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findByPk(req.params.id);
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
    const video = new Video(req.body);
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a video by ID
const updateVideo = async (req, res) => {
  try {
    const video = await Video.update(req.body, {
      where: { id: req.params.id },
    });
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
    const video = await Video.destroy({ where: { id: req.params.id } });
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Add To Favorites
// Add Favorite Video to User
const addToFavorite = async (req, res) => {
  try {
    const userId = parseInt(req.body.userId);
    const videoId = parseInt(req.params.id);
    const user = await User.findByPk(userId);
    console.log('🚀 ~ addToFavorite ~ user:', user);
    const video = await Video.findByPk(videoId);
    await user.addVideo(video, { through: { selfGranted: true } });
    res.json({ message: 'Video added to favorites' });
  } catch (error) {
    console.log('🚀 ~ addToFavorite ~ error:', error);
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
