const blogPostModel = (sequelize, DataTypes) => {
  const blogPostTable = sequelize.define('BlogPost', {
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
      type: DataTypes.DATE,
    },
    updated: {
      type: DataTypes.DATE,
    }
  });

  blogPostTable.associate = (models) => {
    blogPostTable.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
  };

  return blogPostTable;
};

module.exports = blogPostModel;