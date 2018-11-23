const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

module.exports = function (UserDataHelpers) {
  router.get("/", (req, res) => {
    res.render("register"); // make the ejs
  });

  // insert the input info into database! have not done yet
  router.post("/", (req, res) => {
    if (req.body.email && req.body.password) {
      UserDataHelpers.createUser(req.body.email, req.body.password, (err, userID) => {
        if (err === -1) {
          // existing user, suggest login
          const templateVars = {
            userEmail: req.body.email,
            userPassword: req.body.password,
          };
          res.status(401).render('index', templateVars);
          return;
        } else if (err) {
          throw err;
        } else {
          console.log(`New User Created with ID#: ${userID}`); // debugger
          res.status(200).render('index');
        }
      });
    } else {
      res.status(401).send('Email or Password fields cannot be left blank!');
    }
  });

  return router;
}
