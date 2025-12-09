/**
 * HTTP request logger using Morgan
 */

import morgan from "morgan";

const format = process.env.NODE_ENV === "production" ? "combined" : "dev";

export const logger = morgan(format, {
  skip: (req) => {
    return process.env.NODE_ENV === "production" && req.url === "/api/health";
  },
});
