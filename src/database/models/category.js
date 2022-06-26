'use strict';
const categoryModel = (sequelize, DataTypes) => {
  const categoryTable = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
  } 
});
return categoryTable
};

module.exports = categoryModel;