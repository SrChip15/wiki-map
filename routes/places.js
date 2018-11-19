const express = require("express");
const router = express.Router({
  mergeParams: true
});

module.exports = function(DataHelpers) {
  router.get("/", function(req, res) {
    // console.log(req.query.category);
    // console.log(req.params.mapId);
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

  router.post("/", (req, res) => {
    // NOT tested
    DataHelpers.createPlace(
      // Below place properties are presumed to be received via a form
      req.body.name,
      req.body.imageURL,
      req.body.description,
      req.body.placeLat,
      req.body.placeLong,
      req.body.category,
      req.body.placeURL,
      req.params.mapId,
      req.session.user_id
      id => {
        res.status(200);
        res.send("Success!");
        // This endpoint would be requested via AJAX
        // If that'the case package the above create parameters as a JSON object
        // payload and have the res return the same to populate the map with
        // the new place location (res.json(JSON-Payload))
      }
    );
  });

  // Do a seed run to ensure data availability before testing
  // Tested with curl -X POST "http://localhost:8080/api/map/1/places/1/update/?name=CNToweredit"
  router.post("/:placeId/update/", (req, res) => {
    DataHelpers.editPlace(req.params.placeId, req.query.name, rowsAffected => {
      res.status(200).send(`Updated ${rowsAffected} record(s)`);
    });
  });

  // Do a seed run to ensure data availability before testing
  //test api with - curl -X POST "http://localhost:8080/api/map/1/places/1/delete"
  router.post("/:placeId/delete", (req, res) => {
    DataHelpers.deletePlace(req.params.placeId, rowsAffected => {
      res.status(200).send(`Deleted ${rowsAffected} record(s)`);
    });
  });

  return router;
};
