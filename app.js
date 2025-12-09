import express from "express";
import apiRoutes from "./routes/api.js";
import searchRoutes from "./routes/search.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js";
import { securityMiddleware } from "./middleware/security.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(securityMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Dish Finder API!",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      search: "/search/dishes?minPrice=100&maxPrice=250&name=biryani",
    },
  });
});

app.use("/api", apiRoutes);
app.use("/search", searchRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const gracefulShutdown = async () => {
  console.log("\n Shutting down gracefully...");
  process.exit(0);
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API Documentation: /`);
  console.log(`Health Check: /api/health`);
  console.log(`Search: /search/dishes?minPrice=100&maxPrice=250`);
});

export default app;
