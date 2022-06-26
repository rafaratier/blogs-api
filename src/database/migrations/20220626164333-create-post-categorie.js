'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      categoryId: {
        allowNull: false,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          key: 'id',
          model: 'Categories',
        },
        type: Sequelize.INTEGER,
      },
      postId: {
        allowNull: false,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          key: 'id',
          model: 'BlogPosts',
        },
        type: Sequelize.INTEGER,
      }
    },
    {
      timestamps: false
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};