var express = require('express');
var router = express.Router();

var groceries = require('../db/groceriesQueries');

router.get('/', function(req, res, next) {
  console.log(groceries.getAllGroceries);
  groceries.getAllGroceries()
  .then(function (results) {
    res.status(200).json({
      status: 'success',
      data: results
    })
  })
  .catch(function (err) {
    console.log(err);
    return next(err);
  });
  // res.send('hi');
});

module.exports = router;

// router.get('/', function (req, res, next) {
//   decks.getAllDecks()
//     .then(function (results){
//       res.status(200).json({
//         status: 'success',
//         data: results
//       });
//     })
//     .catch(function (err) {
//       return next(err);
//     })
// });