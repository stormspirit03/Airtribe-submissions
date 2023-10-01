
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DBHOST,
    port: process.env.DBPORT, // Default is 3306
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
  });
  
  // Test the connection
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database');
    // Perform database operations here
    connection.release(); // Release the connection when done
  });

  module.exports = pool;