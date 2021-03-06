var express = require('express');
var router = express.Router();

var userQueries = require('../db/userQueries');

router.get('/', function (req, res, next) {
  userQueries.getAllUsers()
  .then(function (results) {
    res.status(200).json({
      status: 'success',
      users: results
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

router.get('/:id', function (req, res, next) {
  userQueries.getSingleUser(req.params.id)
  .then(function (result) {
    res.status(200).json({
      status: 'success',
      user: result
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

router.post('/edit/:id', function (req, res, next) {
  var b = req.body
  userQueries.updateUser(req.params.id, b.fname, b.lname, b.email, b.schedule_type, b.schedule)
  .then(function () {
    res.status(200).json({
      status: 'success'
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

module.exports = router;