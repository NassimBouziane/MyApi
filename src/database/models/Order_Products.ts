import { DataTypes } from 'sequelize';
import { Sequelize, sequelize } from '../config';
import Orders from './Order';
import product from './Product';

const Order_Products = sequelize.define('Order_Products', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

}, {
  sequelize,
  timestamps: false,
});

product.hasMany(Order_Products);
Orders.hasMany(Order_Products);

export default Order_Products;

