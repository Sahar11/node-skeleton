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
module.exports = { menu }
