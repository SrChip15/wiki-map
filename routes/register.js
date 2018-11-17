module.exports = function(knex) {
  const dataHelpers = require("../db/data-helpers-users.js")(knex);

  const express = require("express");
  const router = express.Router();
  // const DataHelpers = require("...DataHelpers");
  const bcrypt = require("bcryptjs");

  router.get("/register", (req, res) => {
    res.render("register"); // make the ejs
  });

  // insert the input info into database! have not done yet
  router.post("/register", (req, res) => {
    if (req.body.email && req.body.name) {
      dataHelpers.createUser(req.body.email, req.body.password, (err, res) => {
        if (err) throw err;
        req.body.user_id = users[0]; //user the seesion later
        req.session.email = req.body.email;
        req.session.pasword = req.body.password;
        res.redirect("/login"); // to the main page??
      });
    } else {
      res.redirect("/register");
    }
  });
  su;
  return router;
};
