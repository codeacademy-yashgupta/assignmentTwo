const insertAllBooksWithRatingHandler = require('./../handlers/insertAllBooksWithRatingHandler');

module.exports = [{
  path: '/insertBooks',
  method: 'GET',
  handler: insertAllBooksWithRatingHandler,

}];
