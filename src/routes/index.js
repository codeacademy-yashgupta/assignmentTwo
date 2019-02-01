const pingRoute = require('./ping');
const booksWithRating = require('./allBooksWithRating');
const insertBooks = require('./insertBooks');

module.exports = [
  ...booksWithRating,
  ...pingRoute,
  ...insertBooks,
];
