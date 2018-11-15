const args = process.argv.slice(2);


module.exports = function makeDataHelpers(knex) {
  return {

    // Create place
    createPlace: function (name, imageURL, description, placeLat, placeLong) {
      knex('places')
        .insert({
          name: name,
          image: imageURL,
          description: description,
          place_lat: placeLat,
          place_long: placeLong,
        })
    },

    // Modify place
    editPlace: function (placeId, ...args) {
      // Var args to offer users flexibility
      // However, at the insertion site, order priority must be maintained,
      // meaning, pass received values (tagged by form approp) in the right order
      // as below and for unreceived values either pass a falsey value or even better
      // just pass false
      const [
        name,
        imageURL,
        description,
        placeLat,
        placeLong
      ] = args;

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
      knex('users')
        .where('id')
        .update(payload);
    },

    // Delete place
    deletePlace: function (placeId) {
      knex('places')
      .where({id: placeId})
      .del();
    },

    // Find place
    //          by map_id
    //          by place_id
    //          by category
    findPlaceById: function (placeId) {
      knex('places')
      .where({id: placeId})
      .then(rows => {
        return rows;
      })
    },

    findPlaceByMapId: function (mapId) {
      // get place id from map id using join
      // since places have a one-to-many relationship with maps,
      // return all matching rows
      knex('places')
      .join('map_places', { map_id: mapId })
      .then(rows => {
        return rows;
      })
    },

    findPlaceByCategory: function (category) {
      knex('places')
      .where({category: category})
      .then (rows => {
        return rows;
      })
    },
  };
}
