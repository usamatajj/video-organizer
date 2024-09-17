const path = require("path");
const express = require("express");
const morgan = require("morgan");

const usersRouter = require("./routes/users/users.router");
const videosRouter = require("./routes/videos/videos.router");

const app = express();
// Logging
app.use(morgan("combined"));
app.use(express.json());
// Routes
app.use("/users", usersRouter);
app.use("/videos", videosRouter);
module.exports = app;
