module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('books', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    bookId: {
      type: Sequelize.INTEGER,
    },
    author: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.DECIMAL,
    },
    like: {
      type: Sequelize.BOOLEAN,
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
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('books'),
};
