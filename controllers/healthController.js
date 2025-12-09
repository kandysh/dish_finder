/**
 * Health controller - System health check endpoints
 */

import pool from "../config/database.js";
import { asyncHandler } from "../middleware/handlers.js";

/**
 * Health check endpoint
 * GET /api/health
 */
export const healthCheck = asyncHandler(async (req, res) => {
  await pool.query("SELECT 1");
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    database: "connected",
  });
});
