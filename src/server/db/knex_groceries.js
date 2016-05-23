
var environment = process.env.NODE_ENV || 'development';

console.log('environment', environment);
var config = require('../../../knexfile_groceryDB.js')[environment];
module.exports = require('knex')(config);

