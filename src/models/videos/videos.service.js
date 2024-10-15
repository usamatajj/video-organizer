const Video = require('./videos.model'); // Assuming you have a Video model defined

class VideoService {
  async createVideo(data) {
    try {
      const video = new Video(data);
      return await video.save();
    } catch (error) {
      throw new Error('Error creating video: ' + error.message);
    }
  }

  async getVideoById(id) {
    try {
      return await Video.findByPk(id);
    } catch (error) {
      throw new Error('Error fetching video: ' + error.message);
    }
  }

  async updateVideo(id, data) {
    try {
      return await Video.update(data, {
        where: { id },
      });
    } catch (error) {
      throw new Error('Error updating video: ' + error.message);
    }
  }

  async deleteVideo(id) {
    try {
      return await Video.destroy({ where: { id } });
    } catch (error) {
      throw new Error('Error deleting video: ' + error.message);
    }
  }

  async getAllVideos() {
    try {
      return await Video.findAll();
    } catch (error) {
      throw new Error('Error fetching videos: ' + error.message);
    }
  }
}

module.exports = new VideoService();
