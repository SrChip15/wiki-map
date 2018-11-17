const express = require("express");
const router = express.Router({
  mergeParams: true
});

module.exports = function(mapFunctions) {



  router.post('/delete', function (req, res) {
    mapFunctions.deleteMap(req.body.mapid)
    .then((result) => {
      console.log(res)
        // CHECK THIS ONE!
        res.redirect('localhost:8080/index')
    })
  })

  router.get('/', function (req, res) {
    res.render("tester")
  })

  router.post('/', function (req, res)  {
    mapFunctions.createMap(req.body.name, req.body.description, req.body.userid, (err, result) => {
      if (err) {
        res.send('something failed');
      } else {
        res.redirect(`/${result}`);
      }
    })
  })

  router.get('/favourites', function (req, res)  {
    mapFunctions.findMapByFavourites(req.body.userid, (err, result) => {
      if (err) {
        res.send('something failed');
      } else {
        res.json(result)
      }
    })
  })

  router.get('/contributions', function (req, res)  {
    mapFunctions.findMapByContribution(req.body.userid, (err, result) => {
      if (err) {
        console.log(req)
        console.log(res)
        res.send('something failed');
      } else {
        res.json(result)
      }
    })
  })

  router.get('/:mapurl', function (res, req) {
    mapFunctions.findMapByUrl(req.params.mapurl, (err, result) => {
      if (err) {
        res.send('something failed');
      } else {
        res.json(result);
      }
    })
  })

return router
};


