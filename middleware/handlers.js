/**
 * Error handling middleware
 */

export const notFoundHandler = (req, res) => {
  res.status(404).json({
    error: "Endpoint not found",
    path: req.path,
    availableEndpoints: {
      root: "/",
      health: "/api/health",
      dishes: "/api/dishes?minPrice=100&maxPrice=250&name=biryani",
    },
  });
};

export const errorHandler = (err, req, res, next) => {
  console.error("Unhandled error:", err);

  const statusCode = err.statusCode || err.status || 500;
  const message =
    process.env.NODE_ENV === "production"
      ? "Internal server error"
      : err.message;

  res.status(statusCode).json({
    error: message,
    ...(process.env.NODE_ENV !== "production" && {
      stack: err.stack,
      path: req.path,
      method: req.method,
    }),
  });
};

/**
 * Async error wrapper - Catches errors in async route handlers
 */
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
