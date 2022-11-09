import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
import Category from './Category';

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
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
  },

);

product.belongsTo(Category);
// Foreign key between product and category.
export default product;
