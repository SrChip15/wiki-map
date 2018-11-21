const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

module.exports = function (UserDataHelpers) {
  router.get("/", (req, res) => {
    res.render("register"); // make the ejs
  });

  // insert the input info into database! have not done yet
  router.post("/register", (req, res) => {
    if (req.body.email && req.body.password) {
      UserDataHelpers.createUser(req.body.email, req.body.password, (err, user) => {
        if (err) throw err;
        console.log(user);
        // req.body.user_id = users[0]; //user the seesion later
        req.session.email = req.body.email;
        req.session.password = req.body.password;
        res.redirect("/login"); // to the main page??
      });
    } else {
      res.redirect("/register");
    }
  });

  return router;
}
