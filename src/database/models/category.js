'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product);
    }
  }
  category.init({
    idcategory: DataTypes.INTEGER,
    wood: DataTypes.STRING,
    steel: DataTypes.STRING,
    glass: DataTypes.STRING,
    plastic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};