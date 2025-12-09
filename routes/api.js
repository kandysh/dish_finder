/**
 * API routes
 */

import express from "express";
import * as healthController from "../controllers/healthController.js";
import * as dishController from "../controllers/dishController.js";

const router = express.Router();

router.get("/health", healthController.healthCheck);
router.get("/search/dishes", dishController.searchDishes);

export default router;
