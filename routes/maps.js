const express = require("express");
const router = express.Router();

module.exports = function(mapFunctions) {

  router.post('/delete', function (req, res) {
    mapFunctions.deleteMap(req.body.mapid)
    .then((result) => {
      console.log(res)
        // CHECK THIS ONE!
        res.send('done!')
    })
  })

  router.get('/', function (req, res) {
    console.log(req.params)
    res.render("tester")

  })

  router.post('/', function (req, res)  {
    mapFunctions.createMap(req.body.name, req.body.description, req.body.userid, (err, result) => {
      if (err) {
        res.send('something failed');
      } else {
        res.json(result);
      }
    })
  })

  router.post('/favourites', function (req, res)  {
    console.log('request', req.body)
    mapFunctions.findMapByFavourites(req.body.userid, (err, result) => {
      if (err) {
        console.log('error', err)
                res.send('something failed');
      } else {
        res.json(result)
      }
    })
  })

  router.post('/contributions', function (req, res)  {
    mapFunctions.findMapByContribution(req.body.userid, (err, result) => {
      if (err) {
        res.send('something failed');
      } else {
        res.json(result)
      }
    })
  })

  router.get('/:mapUrl', function (req, res) {
    mapFunctions.findMapByUrl(req.params.mapUrl, (err, result) => {
      if (err) {
        res.send('something failed');
      } else {
        res.json(result);
      }
    });
  });

return router;
};


