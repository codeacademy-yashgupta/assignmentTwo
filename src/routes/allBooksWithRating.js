const allBooksWithRatingHandler = require('./../handlers/allBooksWithRatingHandler');

module.exports = [{
  path: '/booksWithRating',
  method: 'GET',
  handler: allBooksWithRatingHandler,

}];
