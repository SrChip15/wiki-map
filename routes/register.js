const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

module.exports = function (UserDataHelpers) {
  router.get("/", (req, res) => {
    res.render("register"); // make the ejs
  });

  // insert the input info into database! have not done yet
  router.post("/", (req, res) => {
    // console.log(`Email: ${req.body.email}`);
    // console.log(`Pwd: ${req.body.password}`);
    res.status(200);
    if (req.body.email && req.body.password) {
      UserDataHelpers.createUser(req.body.email, req.body.password, (err, user) => {
        if (err) throw err;
        console.log(`New User Created with ID#: ${user}`);
        res.render("index");
      });
    } else {
      res.status(401).send("Email or Password fields cannot be left blank!");
    }
  });

  return router;
}
