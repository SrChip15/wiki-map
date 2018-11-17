const express = require("express");
const router = express.Router({
  mergeParams: true
});

module.exports = function makeDataHelpers(knex) {
  return router;
}