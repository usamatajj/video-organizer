const express = require("express");
const {
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
} = require("./videos.controller");

const videosRouter = express.Router();

// GET /videos
videosRouter.get("/", getAllVideos);

// GET /videos/:id
videosRouter.get("/:id", getVideoById);

// POST /videos
videosRouter.post("/", createVideo);

// PUT /videos/:id
videosRouter.put("/:id", updateVideo);

// DELETE /videos/:id
videosRouter.delete("/:id", deleteVideo);

module.exports = videosRouter;
