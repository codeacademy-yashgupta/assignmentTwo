const Model = require('./../../models');

module.exports = async (req, res) => {
  const resp = await Model.book.generateLike(req.params.like, req.params.bookId);
  if (req.params.like === 1) {
    return res.response(`Liked book with id ${req.params.bookId}`).code(200);
  }
  if (req.params.like === 0) {
    return res.response(`Disliked book with id ${req.params.bookId}`).code(200);
  }
};
