'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Smartphone'
      },
      {
        name: 'Tablet'
      },
      {
        name: 'Ipad'
      },
      {
        name: 'PC'
      },
      {
        name: 'Notebook'
      },
      {
        name: 'Netbook'
      },
      {
        name: 'MacBook'
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});

  }
};
