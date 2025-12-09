/**
 * Database configuration and connection pool
 * Uses DATABASE_URL environment variable for connection
 */

import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const createPool = () => {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    console.error("DATABASE_URL environment variable is required");
    console.error("Format: mysql://user:password@host:port/database");
    process.exit(1);
  }

  return mysql.createPool({
    uri: connectionString,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
};

const pool = createPool();

// Test database connection on startup
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Database connected successfully");
    connection.release();
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};

testConnection();

export default pool;
