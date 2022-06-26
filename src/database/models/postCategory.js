'use strict';
const postCategoryModel = (sequelize, DataTypes) => {
  const postCategoryTable = sequelize.define('postCategoryTable', {
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
      through: postCategoryTable,
    });

    models.Category.belongsToMany(models.blogPost, {
      as: 'blogPosts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: postCategoryTable,
    });
  };

  return postCategoryModel;
};

module.exports = postCategoryModel;