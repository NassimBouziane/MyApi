import { DataTypes } from 'sequelize';
import { product } from './Product';
import { Sequelize, sequelize } from './config';

const Category = sequelize.define('Category', {

  categoryid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  wood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  steel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  glass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plastic: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});
Category.hasMany(product, {
  foreignKey: 'category_idcategory',
});
product.belongsTo(Category);
