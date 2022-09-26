
INSERT INTO users(username, password, email) VALUES ('hakim', '1234', 'hk@gmail.com'), ('shams', '1234', 'sh@gmail.com');
INSERT INTO products(name, price, category, description, image) VALUES ('Jeans', 200, 'Clothes', 'Female Office Clothing', 'image');
INSERT INTO products(name, price, category, description, image) VALUES ('T-shirt', 400, 'Clothes', 'Not Office Clothing', 'image');
INSERT INTO cart(user_id, product_id) VALUES (1, 1);
INSERT INTO cart(user_id, product_id) VALUES (2, 2);