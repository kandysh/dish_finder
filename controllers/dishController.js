/**
 * Dish controller - Request handlers for dish endpoints
 */

import * as dishService from "../services/dishService.js";
import { asyncHandler } from "../middleware/handlers.js";

const validateSearchParams = ({ minPrice, maxPrice }) => {
  if (!minPrice || !maxPrice) {
    return {
      isValid: false,
      error: "minPrice and maxPrice are required parameters",
    };
  }

  const min = parseFloat(minPrice);
  const max = parseFloat(maxPrice);

  if (isNaN(min) || isNaN(max)) {
    return {
      isValid: false,
      error: "minPrice and maxPrice must be valid numbers",
    };
  }

  if (min < 0 || max < 0) {
    return {
      isValid: false,
      error: "Prices must be positive numbers",
    };
  }

  if (min > max) {
    return {
      isValid: false,
      error: "minPrice cannot be greater than maxPrice",
    };
  }

  return { isValid: true };
};

/**
 * Search dishes by name and price range
 * GET /api/dishes?name=biryani&minPrice=100&maxPrice=300
 */
export const searchDishes = asyncHandler(async (req, res) => {
  const { name, minPrice, maxPrice } = req.query;

  const validation = validateSearchParams({ minPrice, maxPrice });
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.error });
  }

  const dishes = await dishService.searchDishes({
    minPrice: parseFloat(minPrice),
    maxPrice: parseFloat(maxPrice),
    name,
  });

  res.json({ restaurants: dishes });
});
