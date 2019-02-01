module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('booksWithRatings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    author: {
      type: Sequelize.STRING,
    },
    bookId: {
      type: Sequelize.INTEGER,
    },
    bookName: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.DECIMAL,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('booksWithRatings'),
};
