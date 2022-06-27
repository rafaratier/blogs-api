'use strict';
const postCategoryModel = (sequelize, DataTypes) => {
  const postCategoryTable = sequelize.define('PostCategory', {
      postId: {
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      categoryId: {
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false },
  );

  postCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: postCategoryTable,
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: postCategoryTable,
    });
  };

  return postCategoryTable;
};

module.exports = postCategoryModel;