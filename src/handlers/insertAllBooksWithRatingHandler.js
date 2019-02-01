const axios = require('axios');
const Model = require('./../../models');

const externalAPIOne = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
const externalAPITwo = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';
module.exports = async (req, res) => {
  const resp = await axios.get(externalAPIOne);
  const appendRatingWithBooks = async () => {
    await Promise.all(resp.data.books.map(async (num) => {
      const ratingObj = await axios.get(externalAPITwo + num.id);
      // eslint-disable-next-line no-param-reassign
      num.rating = ratingObj.data.rating;
    }));
  };
  await appendRatingWithBooks();
  // eslint-disable-next-line prefer-destructuring
  resp.data.books.forEach(async (element) => {
    await Model.book.generate(element.Name, element.rating);
  });
  return res.response('Inserted into database').code(200);
};
