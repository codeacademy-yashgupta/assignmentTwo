const pingRoute = require('./ping');
const booksWithRating = require('./allBooksWithRating');

module.exports = [
  ...booksWithRating,
  ...pingRoute,
];
