"use strict";

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";

const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const bcrypt = require("bcryptjs");
const cookieSession = require("cookie-session");
const methodOverride = require("method-override");
const app = express();

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require("morgan");
const knexLogger = require("knex-logger");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
app.use(morgan("dev"));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(
  cookieSession({
    name: "wikiMapSession",
    keys: ["wikiMap321"], //how to set this
    maxAge: 24 * 60 * 60 * 1000 * 30
  })
);

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

// Seperated Routes for each Resource
const placeRoutes = require("./routes/places");

const indexRoutes = require("./routes/index");
const mapRoutes = require("./routes/maps");
const registerRoutes = require("./routes/register");
const usersRoutes = require("./routes/users");

// pass the knex db connection object to data helpers to perform DB ops
const placesDataHelpers = require("./db/data-helpers-places.js")(knex);
const mapsDataHelpers = require("./db/data-helpers-maps.js")(knex);
const usersDataHelpers = require("./db/data-helpers-users.js")(knex);

// Mount all resource routes
app.use("/map/:mapId/places", placeRoutes(placesDataHelpers));

app.use("/users", usersRoutes(usersDataHelpers));
app.use("/maps", mapRoutes(mapsDataHelpers)); // maps endpoint tester form groups
app.use("/register", registerRoutes(usersDataHelpers));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`WikiMap app listening on port ${PORT}...`);
});
