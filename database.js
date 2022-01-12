const { append } = require('express/lib/response');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

const menu = () => {
 const queryString = `SELECT * FROM menus`;
 return pool.query(queryString)
 .then((res) => {
   return Promise.resolve(res.rows);
  })
 .catch((err) =>{
   console.log(err.message);
 })
}
exports.menu = menu;

const orders = (orders) => {
  const queryString = `INSERT INTO orders (users_id, total_price) VALUES (2, 2);`;
  const queryParams = [orders.user_id, orders.total_price];
  return pool.query(queryString, queryParams)
  .then((res) => {
    return Promise.resolve(res.rows[0]);
   })
  .catch((err) =>{
    console.log(err.message);
  })
 }
 exports.orders = orders;

