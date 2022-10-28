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
});

Orders.belongsTo(Users);
// Orders.belongsToMany(product, { through: Order_Products });
// product.belongsToMany(Orders, { through: Order_Products });
export default Orders;
Orders.sync();
