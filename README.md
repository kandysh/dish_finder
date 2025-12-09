# Dish Finder API

Simple REST API for searching dishes across restaurants.

## Setup

```bash
# Install dependencies
pnpm install

# Create .env file
echo "MYSQL_URL=mysql://root:password@localhost:3306/dish_finder" > .env

# Create database
mysql -u root -p -e "CREATE DATABASE dish_finder"

# Run schema and seed
mysql -u root -p dish_finder < schema.sql
mysql -u root -p dish_finder < seed.sql

# Start server
pnpm dev
```

Server runs on `http://localhost:3000`

## Database

**Connection String Format:**
```
DATABASE_URL=mysql://username:password@host:port/database
```

**Tables:**
- `restaurants` - Restaurant info
- `menu` - Dishes with prices and order counts
- `orders` - Order history

## API Endpoints

### Health Check
```bash
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2025-12-09T19:00:00.000Z",
  "database": "connected"
}
```

### Search Dishes
```bash
GET /api/dishes?minPrice=100&maxPrice=250&name=biryani
```

**Parameters:**
- `minPrice` (required) - Minimum price
- `maxPrice` (required) - Maximum price  
- `name` (optional) - Dish name to search

**Response:**
```json
{
  "restaurants": [
    {
      "restaurantId": 4,
      "restaurantName": "Bangalore Biriyani Paradise",
      "city": "Bangalore",
      "dishName": "Chicken Biryani",
      "dishPrice": 200,
      "orderCount": 105
    }
  ]
}
```

Returns top 10 dishes by order count.

## Examples

```bash
# Search all dishes in price range
curl "http://localhost:3000/api/dishes?minPrice=100&maxPrice=250"

# Search for biryani
curl "http://localhost:3000/api/dishes?minPrice=150&maxPrice=300&name=biryani"

# Search for paneer
curl "http://localhost:3000/api/dishes?minPrice=50&maxPrice=200&name=paneer"
```

## Tech Stack

- Node.js + Express
- MySQL
- Helmet (security)
- CORS
- Morgan (logging)
