var express = require('express');
var router = express.Router();
var request = require('request-promise');

// var groceries = require('../db/groceriesQueries');
var listItems = require('../db/listsQueries');
// var api = require('../utils/_config');
var apikey = process.env.API_KEY
var apiid = process.env.API_ID


router.get('/', function(req, res, next) {
  // console.log(groceries.getAllGroceries);
  // groceries.getAllGroceries()
  // .then(function (results) {
  //   res.status(200).json({
  //     status: 'success',
  //     data: results
  //   })
  // })
  // .catch(function (err) {
  //   console.log(err);
  //   return next(err);
  // });
  // // res.send('hi');
});

router.get('/:barcode', function(req, res, next) {
  console.log(process.env.API_KEY);
  console.log(process.env.API_ID);

  console.log(req.params.barcode);
  barcode = req.params.barcode
  request('https://api.indix.com/v2/summary/products?countryCode=US&upc='+barcode+'&app_id='+apiid+'&app_key='+apikey)
  .then(function(data) {
    // console.log(JSON.parse(data).result);
    res.status(200).json({
      status: 'success',
      product: JSON.parse(data).result.products
    })
  })
});

router.post('/', function(req, res, next) {
  var b = req.body
  listItems.addItem(b.user_id,b.semName,b.schedule_type,b.schedule)
  .then(function() {
    res.status(200).json({
      status: 'success'
    })
  })
})

module.exports = router;