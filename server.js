"use strict";

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";

const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const bcrypt = require("bcryptjs");
const cookieSession = require("cookie-session");
var methodOverride = require("method-override");


const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require("morgan"); //what is this?
const knexLogger = require("knex-logger"); //what is this?

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const placeRoutes = require("./routes/places");
const mapRoutes = require("./routes/places");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.use(methodOverride("_method"));
// app.use(bodyParser.json()); //
app.use(
  cookieSession({
    name: "wikiMapSession",
    keys: ["wikiMap321"], //how to set this
    maxAge: 24 * 60 * 60 * 1000 * 30
  })
);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded"
  })
);

app.use(express.static("public"));

// pass the knex db connection object to data helpers to perform DB ops
const dataHelpers = require("./db/data-helpers-places.js")(knex);
const dataHelpersMaps = require("./db/data-helpers-maps.js")(knex);
const dataHelpersUsers = require("./db/data-helpers-users.js")(knex);

// Mount all resource routes

app.use("/api/users", usersRoutes(knex));
app.use("/api/map/:mapId/places", placeRoutes(dataHelpers));

app.use("/users", usersRoutes);

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
