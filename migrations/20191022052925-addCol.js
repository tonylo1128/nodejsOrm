'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'posts',
      'img',
      Sequelize.STRING, {
        after: 'categoryId'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'posts',
      'img'
    )
  }
};
