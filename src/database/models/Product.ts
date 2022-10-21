import { DataTypes } from 'sequelize';
import { Sequelize, sequelize } from '../config';
import Orders from './Order';
import Category from './Category';
import Order_Products from './Order_Products';

export const product = sequelize.define(
  'product',
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  },

);

product.belongsTo(Category);

export default product;
product.sync();
