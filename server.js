// load .env data into process.env
require("dotenv").config();
const dbhelper = require('./database.js');

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio')(accountSid, authToken);

const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");

app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));

// Home page
app.get("/", (req, res) => {
  dbhelper.menu().then((menus) => {
    res.render("index", {menus});
  });
});

app.get("/views/checkout", (req, res) => {
  res.render("checkout");
});

app.post("/sendMessage", (req, res) => {
  twilio.messages.create({
    body: 'Thank you for placing the order. It will be ready for pick up in 20 minutes.',
    from: 'Twilio Number',
    to:   'your number',
  })
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
