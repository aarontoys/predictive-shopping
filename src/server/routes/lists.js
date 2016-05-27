var express = require('express');
var router = express.Router();

var lists = require('../db/listsQueries');
var listItems = require('../db/listsQueries');
var userQueries = require('../db/userQueries');
var sched = require('../utils/schedule.js');

router.get('/:id', getLists, getItems, getListDates, sendResults);

function getLists (req, res, next) {
    lists.getAllLists()
    .then(function (result) {
      req.lists = result;
      return next();
    })
    .catch(function (err) {
      return next(err);
    })
}

function getItems (req, res, next) {
  lists.getAllItemsByUser(req.params.id)
  .then(function (result) {
    req.items = result;
    return next();
  })
  .catch(function (err) {
    return next(err);
  })
}

function getListDates (req, res, next) {
  userQueries.getSingleUser(req.params.id)
  .then(function (result) {
    req.occurances = result[0].occurances;
    sched.addOccurances(req.lists, req.occurances);
    return next();
  })
  .catch(function (err) {
    return next(err);
  })
}

function sendResults (req, res, next) {
  res.status(200).json({
    status: 'success',
    lists: req.lists,
    items: req.items,
  });
}

module.exports = router;
