'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('postCategories', {
      categoryId: {
        allowNull: false,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'Categories',
          key: 'id'
        },
        type: Sequelize.INTEGER,
      },
      postId: {
        allowNull: false,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'BlogPosts',
          key: 'id'
        },
        type: Sequelize.INTEGER,
      }
    },
    {
      timestamps: false
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('postCategories');
  }
};