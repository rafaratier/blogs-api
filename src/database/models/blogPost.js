const blogPostModel = (sequelize, DataTypes) => {
  const blogPostTable = sequelize.define('blogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  });

  blogPostTable.associate = (models) => {
    blogPostTable.belongsTo(models.user, {foreignKey: 'userId', as: 'user'});
  };

  return blogPostTable;
};

module.exports = blogPostModel;