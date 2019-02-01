const axios = require('axios');
const Model = require('./../../models');

const externalAPIOne = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
const externalAPITwo = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';
module.exports = async (req, res) => {
  const resp = await axios.get(externalAPIOne);
  // console.log(resp.data);
  // resp.data.books.forEach(async (element, i) => {
  //   const ratingObj = await axios.get(externalAPITwo + element.id);
  //   resp.data.books[i].rating = ratingObj.data.rating;
  //   // console.log(ratingObj.data.rating);
  //   console.log(resp.data.books[i]);
  // });
  const appendRatingWithBooks = async () => {
    await Promise.all(resp.data.books.map(async (num) => {
      const ratingObj = await axios.get(externalAPITwo + num.id);
      console.log(ratingObj.data.rating);
      num.rating = ratingObj.data.rating;
    }));
  };
  await appendRatingWithBooks();
  // eslint-disable-next-line prefer-destructuring
  const books = resp.data.books;

  const result = books.reduce((r, a) => {
    // eslint-disable-next-line no-param-reassign
    r[a.Author] = r[a.Author] || [];
    r[a.Author].push(a);
    return r;
  }, Object.create(null));
  return res.response(result).code(200);
};
