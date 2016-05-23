var express = require('express');
var router = express.Router();

var lists = require('../db/listsQueries');

router.get('/', function(req, res, next) {
  console.log(lists.getAllLists);
  lists.getAllLists()
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