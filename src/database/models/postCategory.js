'use strict';
const postCategoryModel = (sequelize, DataTypes) => {
  const postCategoryTable = sequelize.define('postCategory', {
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
    models.BlogPost.belongsToMany(models.category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: postCategory,
    });

    models.Category.belongsToMany(models.blogPost, {
      as: 'blogPosts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: postCategory,
    });
  };

  return postCategoryModel;
};

module.exports = postCategoryModel;