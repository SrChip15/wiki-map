





module.exports = function makeDataHelpers(db) {
  return {

    // Create map
    createMap: function(name, url, description, ) {

    }
    // Delete map
    // Find map
    //         by URL
    //         by user favourites
    //         by user contributions

    // Create User
    // Find user
    //         by email and password

    // Create place
    // Modify place
    // Delete place
    // Find place
    //          by map_id
    //          by place_id
    //          by category














    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection('tweeter').insertOne(newTweet, function(err, result) {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection('tweeter').find().sort({created_at : - 1}).toArray(callback);
    },

    // Get only the newest tweet in DB, will eventually modify to get newest user tweet
    getLatestTweet: function(callback) {
      db.collection('tweeter').find().sort({created_at : -1}).limit(1).toArray(callback);
    }
  }
};
