/**
 * Places endpoint database ops
 */
module.exports = function makeDataHelpers(knex) {
  return {
    // Create place
    createPlace: function(
      name,
      imageURL,
      description,
      placeLat,
      placeLong,
      mapId
    ) {
      knex("places")
        .returning("id")
        .insert({
          name: name,
          image: imageURL,
          description: description,
          place_lat: placeLat,
          place_long: placeLong
        })
        .then(id => {
          return knex("map_places").insert({
            map_id: mapId,
            place_id: id
          });
        });
    },

    // Modify place
    editPlace: function(placeId, ...args) {
      // Var args to offer users flexibility
      // However, at the insertion site, order priority must be maintained,
      // meaning, pass received values (tagged by form approp) in the right order
      // as below and for unreceived values either pass a falsey value or even better
      // just pass false
      const [name, imageURL, description, placeLat, placeLong] = args;

      const payload = {};
      if (name) {
        payload.name = name;
      }

      if (imageURL) {
        payload.image = imageURL;
      }

      if (description) {
        payload.description = description;
      }

      if (placeLat) {
        payload.place_lat = placeLat;
      }

      if (placeLong) {
        payload.place_long = placeLong;
      }

      // now payload is packed with the updated column info and ready for update
      knex("places")
        .where("placeId")
        .update(payload);
    },

    // Delete place
    deletePlace: function(placeId) {
      knex("map_places")
        .where({ place_id: placeId })
        .del()
        .then(() => {
          knex("places")
            .where({ id: placeId })
            .del();
        });
    },

    // Find place by place_id
    findPlaceById: function(placeId, callback) {
      return knex
        .select("*")
        .from("places")
        .where("id", placeId)
        .then(rows => {
          callback(rows);
        });
    },

    // Find place by map_id
    // since places have a one-to-many relationship with maps,
    // return all matching rows
    findPlaceByMapId: function(mapId, callback) {
      return knex
        .select("*")
        .from("places")
        .rightJoin("map_places", "places.id", "map_places.place_id")
        .where("map_places.map_id", mapId)
        .then(rows => {
          callback(rows);
        })
        .catch(err => {
          console.log(err);
        });
    },

    // Find place by category
    findPlaceByCategory: function(category, callback) {
      return knex
        .select("*")
        .from("places")
        .where("category", category)
        .then(rows => {
          callback(rows);
        });
    }
  };
};
