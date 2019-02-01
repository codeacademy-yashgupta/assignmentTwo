module.exports = (sequelize, DataTypes) => {
  const booksWithRating = sequelize.define('booksWithRating', {
    author: DataTypes.STRING,
  }, {});
  return booksWithRating;
};
