const pingRoute = require('./ping');
const booksWithRating = require('./allBooksWithRating');
const insertBooks = require('./insertBooks');
const bookLike = require('./bookLikesRoute');

module.exports = [
  ...booksWithRating,
  ...pingRoute,
  ...insertBooks,
  ...bookLike,
];
