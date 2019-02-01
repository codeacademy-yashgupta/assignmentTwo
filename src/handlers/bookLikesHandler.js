const Model = require('./../../models');

module.exports = async (req, res) => {
  const resp = await Model.book.generateLike(req.params.like, req.params.bookId);
  return res.response(resp).code(200);
};
