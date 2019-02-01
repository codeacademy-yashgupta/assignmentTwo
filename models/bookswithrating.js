module.exports = (sequelize, DataTypes) => {
  const booksWithRating = sequelize.define('book', {
    author: DataTypes.STRING,
    bookId: DataTypes.STRING,
    name: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    like: DataTypes.BOOLEAN,
  }, {});
  booksWithRating.getAllBooksRating = () => booksWithRating.findAll();
  booksWithRating.generate = (bookId, name, rating) => booksWithRating.create({
    bookId, name, rating,
  });
  booksWithRating.generateLike = (like, bookId) => {
    booksWithRating.update({
      like,
    }, {
      where: {
        bookId,
      },
    });
  };
  return booksWithRating;
};
