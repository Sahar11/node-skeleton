-- Users table seeds here (Example)
INSERT INTO users (name, email, password) VALUES ('Alice', 'alice@email.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Bob', 'bob@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('John', 'john@cmail.com', 'password');


INSERT INTO orders (users_id, total_price) VALUES (2, 20);


INSERT INTO menus (item, description, thumbnail_url, price) VALUES ('pizza','Pepperoni', 'https://www.healthylittlefoodies.com/wp-content/uploads/2019/10/Tortilla-Pizza-500x500.jpg', 10);
INSERT INTO menus (item, description, thumbnail_url, price) VALUES ('pizza','Tomatina', 'https://cdn.pixabay.com/photo/2020/04/29/03/30/pizza-5107039_1280.jpg', 20);
INSERT INTO menus (item, description, thumbnail_url, price) VALUES ('pizza','Margherita', 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F06%2F15%2Fmozzarella-pizza-margherita-FT-RECIPE0621.jpg', 15);
INSERT INTO menus (item, description, thumbnail_url, price) VALUES ('pizza','Barbecue Chicken with Bacon PIzza', 'https://media.istockphoto.com/photos/barbecue-chicken-with-bacon-pizza-picture-id171332132', 26);
INSERT INTO menus (item, description, thumbnail_url, price) VALUES ('pizza','Garden Pizza', 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', 30);
INSERT INTO menus (item, description, thumbnail_url, price) VALUES ('pizza','Olive Pizza', 'https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80', 28);
-- INSERT INTO restaurants (name, menu_id, order_id) VALUES ('RoJoSas Pizza', 1, 1);
