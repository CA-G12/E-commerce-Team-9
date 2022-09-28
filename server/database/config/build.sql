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
  user_id INT,
  product_id INT,
  count INT DEFAULT 1,
  CONSTRAINT pkey PRIMARY KEY (user_id, product_id),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
);

COMMIT;