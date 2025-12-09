-- Clear existing data
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE orders;
TRUNCATE TABLE menu;
TRUNCATE TABLE restaurants;
SET FOREIGN_KEY_CHECKS = 1;

-- Insert restaurants
INSERT INTO restaurants (name, city, created, updated) VALUES
('Hyderabadi Spice House', 'Hyderabad', NOW(), NOW()),
('Mumbai Masala Kitchen', 'Mumbai', NOW(), NOW()),
('Delhi Dhaba Express', 'Delhi', NOW(), NOW()),
('Bangalore Biriyani Paradise', 'Bangalore', NOW(), NOW()),
('Chennai Curry Corner', 'Chennai', NOW(), NOW()),
('Kolkata Kitchen', 'Kolkata', NOW(), NOW()),
('Pune Pav Bhaji Point', 'Pune', NOW(), NOW()),
('Ahmedabad Thali House', 'Ahmedabad', NOW(), NOW()),
('Jaipur Junction', 'Jaipur', NOW(), NOW()),
('Lucknow Nawabi Cuisine', 'Lucknow', NOW(), NOW());

-- Insert menu items
INSERT INTO menu (dishname, dishprice, ordercount, restaurant_id) VALUES
-- Hyderabadi Spice House (id: 1)
('Chicken Biryani', 220, 96, 1),
('Mutton Biryani', 280, 75, 1),
('Hyderabadi Haleem', 180, 45, 1),
('Paneer Tikka', 160, 30, 1),

-- Mumbai Masala Kitchen (id: 2)
('Butter Chicken', 250, 88, 2),
('Pav Bhaji', 120, 92, 2),
('Vada Pav', 40, 150, 2),
('Paneer Tikka', 180, 65, 2),

-- Delhi Dhaba Express (id: 3)
('Dal Makhani', 140, 78, 3),
('Chicken Tikka Masala', 240, 82, 3),
('Paneer Butter Masala', 200, 70, 3),
('Naan', 30, 120, 3),

-- Bangalore Biriyani Paradise (id: 4)
('Chicken Biryani', 200, 105, 4),
('Veg Biryani', 150, 68, 4),
('Mutton Biryani', 300, 55, 4),
('Raita', 50, 90, 4),

-- Chennai Curry Corner (id: 5)
('Chicken Chettinad', 230, 72, 5),
('Fish Curry', 260, 58, 5),
('Masala Dosa', 80, 110, 5),
('Idli Sambar', 60, 95, 5),

-- Kolkata Kitchen (id: 6)
('Chicken Biryani', 210, 85, 6),
('Fish Fry', 180, 62, 6),
('Mutton Kosha', 270, 48, 6),
('Luchi', 40, 75, 6),

-- Pune Pav Bhaji Point (id: 7)
('Pav Bhaji', 100, 98, 7),
('Cheese Pav Bhaji', 140, 87, 7),
('Misal Pav', 90, 78, 7),
('Vada Pav', 35, 125, 7),

-- Ahmedabad Thali House (id: 8)
('Gujarati Thali', 180, 92, 8),
('Dhokla', 60, 88, 8),
('Khandvi', 80, 65, 8),
('Paneer Tikka', 170, 55, 8),

-- Jaipur Junction (id: 9)
('Dal Baati Churma', 160, 76, 9),
('Laal Maas', 290, 52, 9),
('Gatte ki Sabzi', 140, 68, 9),
('Paneer Tikka', 175, 60, 9),

-- Lucknow Nawabi Cuisine (id: 10)
('Lucknowi Biryani', 260, 89, 10),
('Galouti Kebab', 220, 71, 10),
('Chicken Korma', 240, 64, 10),
('Shahi Tukda', 120, 45, 10);
