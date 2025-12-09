/**
 * Dish service
 */

import pool from "../config/database.js";

/**
 * Search dishes by name and price range
 */
export const searchDishes = async ({ minPrice, maxPrice, name }) => {
  let query = `
    SELECT
      r.id as restaurantId,
      r.name as restaurantName,
      r.city,
      m.dishname as dishName,
      m.dishprice as dishPrice,
      COALESCE(COUNT(o.id), 0) as orderCount
    FROM menu m
    INNER JOIN restaurants r ON m.restaurant_id = r.id
    LEFT JOIN orders o ON m.id = o.menu_id
    WHERE m.dishprice BETWEEN ? AND ?
  `;

  const params = [minPrice, maxPrice];

  if (name) {
    query += ` AND m.dishname LIKE ?`;
    params.push(`%${name}%`);
  }

  query += `
    GROUP BY r.id, r.name, r.city, m.id, m.dishname, m.dishprice
    ORDER BY orderCount DESC
    LIMIT 10
  `;

  const [rows] = await pool.query(query, params);
  return rows;
};
