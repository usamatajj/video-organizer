const http = require('http');
const app = require('./app');
const cron = require('node-cron');

const { emailVideosToEveryUser } = require('./jobs/videos');

cron.schedule('* * * * *', emailVideosToEveryUser);

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
