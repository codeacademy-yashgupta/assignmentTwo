module.exports = (sequelize, DataTypes) => {
  const booksWithRating = sequelize.define('book', {
    author: DataTypes.STRING,
    name: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
  }, {});
  booksWithRating.getAllBooksRating = () => {
  };
  booksWithRating.generate = (name, rating) => booksWithRating.create({
    name, rating,
  });
  return booksWithRating;
};
