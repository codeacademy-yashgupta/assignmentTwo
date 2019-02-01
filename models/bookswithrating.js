module.exports = (sequelize, DataTypes) => {
  const booksWithRating = sequelize.define('booksWithRating', {
    author: DataTypes.STRING,
  }, {});
  booksWithRating.getAllBooksRating = () => {
  };
  return booksWithRating;
};
