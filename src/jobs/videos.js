const { emailSuggestedVideos } = require('../mailer');
const { getAllUsersData } = require('../models/users/users.service');
const Video = require('../models/videos/videos.model');

const emailVideosToEveryUser = async () => {
  try {
    const videos = await Video.findAll();
    const users = await getAllUsersData();

    await emailSuggestedVideos({
      videos,
      users,
    });
  } catch (error) {
    console.error('Email Videos Error:', error);
  }
};

module.exports = { emailVideosToEveryUser };
