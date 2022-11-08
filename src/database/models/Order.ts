import { DataTypes } from 'sequelize';
import { Users } from './User';
import { sequelize } from '../config';

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
