import { DataTypes } from 'sequelize';
import { Users } from './User';
import { Sequelize, sequelize } from '../config';
import Order_Products from './Order_Products';
import product from './Product';

const Orders = sequelize.define('Orders', {

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  orderdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

}, {
  sequelize,
  timestamps: false,
});

Orders.belongsTo(Users);
export default Orders;
