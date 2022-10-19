'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
this.belongsToMany(models.Users, { through: models.orders });

    }
  }
  product.init({
    idproduct: DataTypes.INTEGER,
    productname: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};