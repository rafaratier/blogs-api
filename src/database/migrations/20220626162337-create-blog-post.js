'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          key: 'id',
          model: 'users',
        },
        type: Sequelize.INTEGER
      },
      published: {
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
        type: Sequelize.DATE,
      },
      updated: {
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blogPosts');
  }
};