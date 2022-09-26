
INSERT INTO users(username, password, email) VALUES ('sama', '$2b$10$WEi.b2CT7sVbPBdQjQ.47uTFsRp0Nuowm05vXCY5vvl/29EQPM8gi', 'sama@gmail.com'), ('shams', '$2b$10$rdlqFn.FiD6gy80tZB0jwO.5Xq91NdAQzgmLoaS4CqHa92sYDDqae', 'sh@gmail.com');
INSERT INTO products(name, price, category, description, image) VALUES ('Jeans', 200, 'Clothes', 'Female Office Clothing', 'image');
INSERT INTO products(name, price, category, description, image) VALUES ('T-shirt', 400, 'Clothes', 'Not Office Clothing', 'image');
INSERT INTO cart(user_id, product_id) VALUES (1, 1);
INSERT INTO cart(user_id, product_id) VALUES (2, 2);