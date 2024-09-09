const { Sequelize } = require("sequelize");

const dbConnection = new Sequelize("video_library", "root", "root", {
  host: "localhost",
  dialect: "postgres", // Specify that you're using PostgreSQL
  logging: false, // Optional: Disable logging of SQL queries to the console
});

// Test the connection
dbConnection
  .authenticate()
  .then(() => {
    console.log("Connection to PostgreSQL has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = dbConnection;
