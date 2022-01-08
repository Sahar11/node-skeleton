-- Users table seeds here (Example)
INSERT INTO users (name, email, password) VALUES ('Alice', 'alice@email.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Bob', 'bob@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('John', 'john@cmail.com', 'password');


INSERT INTO orders (users_id, total_price) VALUES (2, 20);


INSERT INTO menus (item, description, thumbnail_url, price) VALUES ('pizza','large pepperoni', 'https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg', 10);


INSERT INTO restaurants (name, menu_id, order_id) VALUES ('RoJoSas Pizza', 1, 1);
