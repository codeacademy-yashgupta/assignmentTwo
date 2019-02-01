const Joi = require('joi');
const bookLikesHandler = require('./../handlers/bookLikesHandler');

module.exports = [{
  path: '/bookOpinion/{bookId}/{like}',
  method: 'GET',
  handler: bookLikesHandler,
  config: {
    validate: {
      params: {
        bookId: Joi.number(),
        like: Joi.number(),
      },
    },
  },
}];
