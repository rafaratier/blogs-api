'use strict';
const userModel = (sequelize, DataTypes) => {
  const userTable = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  userTable.associate = (models) => {
    userTable.hasMany(models.blogPost, {foreignKey: 'userId', as: 'blogposts'});
  };

return userTable;
};

module.exports = userModel;