BEGIN;

DROP TABLE IF EXISTS users, products, cart CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password TEXT NOT NULL,
  email VARCHAR(255) UNIQUE
);

CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price FLOAT NOT NULL,
  category VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL
);

CREATE TABLE cart(
  id SERIAL PRIMARY KEY,
  user_id INT,
  product_id INT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_cart_product FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
);

COMMIT;