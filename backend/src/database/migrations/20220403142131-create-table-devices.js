'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('devices', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      color:{
        type: Sequelize.STRING(16),
        allowNull: false
      },
      partnumber: {
        type: Sequelize.BIGINT,
        allowNull: false
      }
    },{
      timestamps: false  
    });
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('devices');

  }
};
