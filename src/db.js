const { Sequelize } = require('sequelize');
const { config } = require('dotenv');
config();

const dbConnection = new Sequelize(
  'video_library',
  process.env.DB,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres', // Specify that you're using PostgreSQL
    logging: false, // Optional: Disable logging of SQL queries to the console
  }
);

// Test the connection
dbConnection
  .authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
//
dbConnection
  .sync()
  .then((res) => {
    console.log('Database synchronized successfully.');
  })
  .catch((err) => {
    console.error('Error synchronizing the database:', err);
  });

module.exports = dbConnection;
