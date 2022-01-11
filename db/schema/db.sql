DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS menus CASCADE;
DROP TABLE IF EXISTS restaurants CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);


CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  total_price money
);


CREATE TABLE menus (
  id SERIAL PRIMARY KEY NOT NULL,
  item VARCHAR(255),
  description VARCHAR(255),
  thumbnail_url VARCHAR(255),
  price money
);

-- CREATE TABLE restaurants (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL,
    --  menu_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
--   order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE
-- );


