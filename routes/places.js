const express = require("express");
const router = express.Router({
  mergeParams: true
});

module.exports = function(DataHelpers) {
  router.get("/", function(req, res) {
    console.log(req.query.category);
    console.log(req.params.mapId);
    if (req.query.category) {
      // Query string detected; Get places tagged by categories
      DataHelpers.findPlaceByCategory(req.query.category, rows => {
        res.json(rows);
      });
    }

    if (!req.query.category) {
      // Not a query for categories; Get all places tagged by a specific map id
      DataHelpers.findPlaceByMapId(req.params.mapId, places => {
        res.json(places);
      });
    }
  });

  router.get("/:placeId", (req, res) => {
    DataHelpers.findPlaceById(req.params.placeId, rows => {
      res.json(rows);
    });
  });

  return router;
};
