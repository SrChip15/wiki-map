"use strict";

const express = require("express");
const router = express.Router();

//export a function
module.exports = function(dataHelpers) {
   router.get("/", (req, res) => {
    if (req.session) {
      const templateVars = {
        user: req.session.user_id
      };
      res.render("index", templateVars);
    } else {
      const templateVars = {
        user: null
      };
      res.render("index", templateVars);
    }
  });

  // verify the user information
  router.get("/login", (req, res) => {
    res.render("index");
    res.send("this is the login page");
  });

  router.post("/logout", (req, res) => {
    //clear the cookie session
    // or delete the cookieSession;
    res.redirect("/");
  });

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
        req.session.password = req.body.password;
        res.redirect("/login"); // to the main page??
      });
    } else {
      res.redirect("/register");
    }
  });

  // List all the maps ListObj as the placehoder
  router.get("/maps", (req, res) => {
    dataHelpers.getMapList((err, listObj) => {
      res.json(listObj);
    });
  });

  //create a new map, generate map_id for each map
  router.post("/maps", (req, res) => {
    if (req.session.name) {
      //if login (set the session in register)
      dataHelpers.createMapList(
        req.body.mapName,
        req.body.description,
        req.session.user_id, //need a mapID?
        function(err, response) {
          // if (err){console.log("error", err)}else
          // if (response) {
          res.send(response);
        }
      );
    } else {
      console.log(req.session); // what is req.session
      res.send("Only log-in users could create a new map");
    }
  });

  return router;
}
